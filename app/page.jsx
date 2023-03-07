import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-screen w-full homepage">
      <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 server">
        <h1 className="text-8xl my-8">Learn. Cook. Share</h1>
        <h2 className="text-5xl my-8">Cooking made easy</h2>
        <Link
          className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white"
          href="/types"
        >
          List of Cuisines
        </Link>
      </div>
    </div>
  );
}
