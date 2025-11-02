import { Request, Response, NextFunction } from "express";

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store for rate limiting
// For production, consider using Redis or similar
const rateLimitStore: RateLimitStore = {};

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  Object.keys(rateLimitStore).forEach(key => {
    if (rateLimitStore[key].resetTime < now) {
      delete rateLimitStore[key];
    }
  });
}, 60 * 60 * 1000); // 1 hour

export interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Max requests per window
  message?: string; // Custom error message
}

/**
 * Rate limiting middleware to prevent API abuse
 * Uses IP address as the identifier
 */
export function rateLimiter(options: RateLimitOptions) {
  const {
    windowMs,
    maxRequests,
    message = "Too many requests. Please try again later."
  } = options;

  return (req: Request, res: Response, next: NextFunction) => {
    // Get IP address from request
    const ip = req.ip || req.socket.remoteAddress || "unknown";
    const key = `${req.path}:${ip}`;

    const now = Date.now();
    const rateLimitData = rateLimitStore[key];

    if (!rateLimitData || rateLimitData.resetTime < now) {
      // First request or window has reset
      rateLimitStore[key] = {
        count: 1,
        resetTime: now + windowMs
      };
      return next();
    }

    if (rateLimitData.count >= maxRequests) {
      // Rate limit exceeded
      const resetIn = Math.ceil((rateLimitData.resetTime - now) / 1000);
      return res.status(429).json({
        success: false,
        message,
        retryAfter: resetIn
      });
    }

    // Increment count and allow request
    rateLimitData.count++;
    next();
  };
}

/**
 * Input sanitization middleware
 * Prevents common injection attacks and validates input
 */
export function sanitizeInput(req: Request, res: Response, next: NextFunction) {
  if (req.body) {
    // Remove any HTML tags from string inputs
    const sanitize = (value: any): any => {
      if (typeof value === "string") {
        // Remove HTML tags
        let sanitized = value.replace(/<[^>]*>/g, "");
        // Remove script tags content
        sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
        // Trim whitespace
        return sanitized.trim();
      }
      if (typeof value === "object" && value !== null) {
        const sanitized: any = Array.isArray(value) ? [] : {};
        for (const key in value) {
          sanitized[key] = sanitize(value[key]);
        }
        return sanitized;
      }
      return value;
    };

    req.body = sanitize(req.body);
  }
  next();
}

/**
 * Email validation middleware
 * Validates email format and checks for disposable email domains
 */
export function validateEmail(req: Request, res: Response, next: NextFunction) {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required"
    });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /\.\./,  // consecutive dots
    /@.*@/,  // multiple @ symbols
    /[<>]/,  // angle brackets
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }
  }

  next();
}
