export default function AdminDocumentationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        📄 Documentation Coming Soon
      </h1>
      <p className="text-gray-600 text-lg max-w-xl">
        This admin panel documentation is currently under development and will be uploaded upon project completion.
        <br />
        Stay tuned for a detailed guide on how to manage bookings, emails, and more.
      </p>
      <div className="mt-8">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full font-medium">
          ⏳ Under Construction
        </span>
      </div>
    </div>
  );
}
