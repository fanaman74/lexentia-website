export function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`wordmark ${className}`}><span className="wordmark-tile">L</span><span>LEXENTIA</span></span>;
}
