import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">
            Thorn Street
          </h1>
          <p className="text-lg mt-4 opacity-70">Coming Soon</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8">
        <div className="text-center">
          <p className="opacity-70">
            Contact:{" "}
            <a
              href="mailto:connorjennings@thornstreet.io"
              className="hover:opacity-80 transition-opacity underline"
            >
              connorjennings@thornstreet.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
