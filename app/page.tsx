import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Recurse ML Documentation</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Welcome to the official documentation for Recurse ML products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/gh"
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">GitHub App →</h2>
            <p className="text-muted-foreground">
              Learn how to use the Recurse ML GitHub App for automated code reviews.
            </p>
          </Link>
          <Link
            href="/docs/rml"
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">RML CLI →</h2>
            <p className="text-muted-foreground">
              Command-line interface for static analysis and code review.
            </p>
          </Link>
          <Link
            href="/docs/remcp"
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">REMCP →</h2>
            <p className="text-muted-foreground">
              Model Context Protocol server for AI-powered code analysis.
            </p>
          </Link>
          <Link
            href="/docs/spx"
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">SPX →</h2>
            <p className="text-muted-foreground">
              Documentation for the SPX project.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
