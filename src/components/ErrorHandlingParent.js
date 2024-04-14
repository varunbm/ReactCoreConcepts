import React from 'react'
import ErrorHandlingChild from './ErrorHandlingChild'
import ErrorBoundary from './ErrorBoundary'

function ErrorHandlingParent() {
  return (
    <ErrorBoundary>
      <ErrorHandlingChild heroName="Superman"/>
      <ErrorHandlingChild heroName="Batman"/>
      <ErrorHandlingChild heroName="Joker"/>
    </ErrorBoundary>
  )
}

export default ErrorHandlingParent
