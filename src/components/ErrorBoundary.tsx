import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-pearl-white flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-navy-900/5">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-navy-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-navy-900/60 mb-8 leading-relaxed">
              We encountered an unexpected error while loading this page. Please try refreshing or return to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <RefreshCcw size={16} />
                Refresh Page
              </button>
              <a href="/" className="btn-secondary">
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
