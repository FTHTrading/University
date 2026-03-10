"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary — catches render errors in client components
 * (e.g. WebGL failures in the 3D campus map) and prevents
 * the entire page from white-screening.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="border border-gold/30 bg-ivory p-8 text-center my-8 max-w-2xl mx-auto">
          <h2 className="font-serif text-xl font-bold text-maroon mb-2">
            Something went wrong
          </h2>
          <p className="text-stone text-sm leading-relaxed mb-4">
            A component failed to render. This may be due to a WebGL or browser
            compatibility issue.
          </p>
          <p className="text-stone/60 text-xs font-mono">
            {this.state.error?.message}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 inline-block border border-gold text-gold font-serif text-sm px-6 py-2 tracking-wide hover:bg-gold/10 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
