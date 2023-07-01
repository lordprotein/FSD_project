import React, { ErrorInfo, PropsWithChildren, ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props)

    // Define a state variable to track whether there is an error or not
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error({ error, errorInfo })
  }

  render(): ReactNode {
    const { props, state } = this

    if (state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
        </div>
      )
    }

    // Return children components in case of no error
    return props.children
  }
}
