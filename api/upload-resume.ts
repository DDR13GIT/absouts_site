import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // In a real implementation, this would handle file upload to cloud storage
    // For now, return a mock URL
    const mockUrl = `https://storage.example.com/resumes/${Date.now()}-resume.pdf`;

    return res.status(200).json({
      success: true,
      url: mockUrl
    });
  } catch (error) {
    console.error("Resume upload error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload resume"
    });
  }
}
