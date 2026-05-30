import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white px-6">
          <div className="max-w-md text-center font-sans">
            <h1 className="text-3xl font-bold text-slate-950">404 Page Not Found</h1>
            <p className="mt-3 text-slate-600">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/en"
              className="mt-6 inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
