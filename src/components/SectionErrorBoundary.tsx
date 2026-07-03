import React from "react";

interface SectionErrorBoundaryProps {
  sectionName: string;
  children: React.ReactNode;
}

interface SectionErrorBoundaryState {
  hasError: boolean;
}

class SectionErrorBoundary extends React.Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SectionErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(`SectionErrorBoundary [${this.props.sectionName}]:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              The <span className="font-medium">{this.props.sectionName}</span> section could not be loaded.
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default SectionErrorBoundary;
