import { ErrorBoundary } from "react-error-boundary";
function ErrorBoundaryUI({ error, resetErrorBoundary}) {
    return (
        <div className="h-[100vh] flex justify-center items-center px-6">
            <div role="alert"  className="alert alert-error">
                <p>Something went wrong:</p>
                <div>{error?.message}</div>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        </div>
        
    )
}
export default function CustomErrorboundary({ children }) {
    return (
        <ErrorBoundary 
            FallbackComponent={ErrorBoundaryUI}
            onReset={() => window.location.reload()}    
        >
            {children}
        </ErrorBoundary>
    )
}