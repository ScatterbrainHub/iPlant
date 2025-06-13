export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-5xl font-bold text-lime-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="text-lime-500 underline hover:text-lime-700">
          Go back home
        </a>
      </div>
    </div>
  );
}
