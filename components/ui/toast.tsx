"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

// ─── Toast store ────────────────────────────────────────────────────────────
// Self-contained reducer + listener pattern (Sonner-style: no context, no hooks
// forced on the user — call toast() from anywhere).
// TOAST_LIMIT = 1: only one toast visible at a time.

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 300; // ms — exit animation time

export type ToastVariant = "default" | "destructive";

export type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: ToastVariant;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type Action =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

type State = { toasts: ToasterToast[] };

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((t) => addToRemoveQueue(t.id));
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) return { ...state, toasts: [] };
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
}

type Listener = (state: State) => void;
const listeners: Listener[] = [];
let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

type Toast = Omit<ToasterToast, "id">;

function toast(props: Toast) {
  const id = genId();
  const update = (p: Partial<ToasterToast>) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...p, id } });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const idx = listeners.indexOf(setState);
      if (idx > -1) listeners.splice(idx, 1);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

// ─── Toast Radix primitives ──────────────────────────────────────────────────

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-4 right-4 z-[100] flex max-h-screen w-full max-w-[380px]",
      "flex-col gap-2",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

// Toast variants
export const toastVariants = cva(
  [
    "group pointer-events-auto relative flex w-full items-start gap-3",
    "overflow-hidden rounded-xl border p-4",
    "shadow-[var(--shadow-strong)]",
    // Enter: slide up + fade in from bottom (origin: bottom-right matches viewport position)
    "data-[state=open]:slide-in-from-bottom-4 data-[state=open]:[animation-duration:300ms]",
    // Exit: slide out to right, faster than enter (asymmetric)
    "data-[state=closed]:slide-out-to-right-full data-[state=closed]:[animation-duration:200ms]",
    // Swipe dismissal using CSS transitions (interruptible — Emil: use transitions not keyframes for dynamic UI)
    "transition-transform",
    "data-[swipe=move]:[transform:translateX(var(--radix-toast-swipe-move-x))]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:duration-200",
    "data-[swipe=end]:slide-out-to-right-full data-[swipe=end]:[animation-duration:200ms]",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-neutral-dark/10 bg-bg-surface text-text-primary",
        ],
        destructive: [
          "border-red-200 bg-red-50 text-red-900",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("text-sm font-semibold leading-snug", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-sm text-text-secondary leading-relaxed", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      "ml-auto shrink-0 self-start",
      "inline-flex h-8 items-center justify-center rounded-lg border px-3",
      "text-xs font-medium text-text-primary",
      "border-neutral-dark/20 bg-transparent",
      "transition-colors duration-150",
      "hover:bg-bg-darker",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
      "disabled:pointer-events-none disabled:opacity-50",
      "group-[.destructive]:border-red-200/50 group-[.destructive]:text-red-700",
      "group-[.destructive]:hover:bg-red-100",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    toast-close=""
    className={cn(
      "ml-auto shrink-0 self-start",
      "flex size-6 items-center justify-center rounded-md",
      "text-text-muted transition-colors duration-150",
      "hover:text-text-primary hover:bg-bg-darker",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
      "group-[.destructive]:text-red-500 group-[.destructive]:hover:text-red-700",
      "[&_svg]:size-3.5",
      className
    )}
    {...props}
  >
    <X />
    <span className="sr-only">Close</span>
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  useToast,
  toast,
};
export type { ToastActionElement };
