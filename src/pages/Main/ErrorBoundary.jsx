import React from "react";

// Catching rendering errors with an error boundary
function CatchingError() {
  return (
    <h1> Something went wrong. Please refresh the page and try again. </h1>
  );
}
// ErrorBoundary is a React component that catches JavaScript errors anywhere in its child component tree,
// logs those errors, and displays a fallback UI.
export class ErrorBoundary extends React.Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    // Initial state with hasError set to false
    this.state = { hasError: false };
  }

  // This lifecycle method is invoked after an error has been thrown by a descendant component.
  // It receives the error and updates the state so the next render will show the fallback UI.
  static getDerivedStateFromError(error) {
    // Update state to render the fallback UI
    return { hasError: true };
  }

  // This lifecycle method provides more info about the error that was caught.
  // Here we simply log the error and any additional details to the console.
  componentDidCatch(error, errorInfo) {
    // Log the error and additional information
    console.log(error, errorInfo);
  }

  // The render method is responsible for rendering the component
  render() {
    // If there's an error, render the CatchingError component
    if (this.state.hasError) {
      return <CatchingError />;
    }
    // Otherwise, render the children components
    return this.props.children;
  }
}
