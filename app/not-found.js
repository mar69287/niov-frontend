import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center">
      <div className="bg-black bg-opacity-80 p-8 text-center text-white h-full w-full flex-center flex-col">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn btn-primary border-none bg-[#FF7D9C] hover:bg-[#e06680] text-white py-2 px-4 rounded-md transition-colors duration-200">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
