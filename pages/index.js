import Head from "next/head";
import Link from "next/link";
import Snippet from "../components/Snippet";
import useSWR from "swr";

export default function Home() {
  const { data: snippets, mutate } = useSWR("/api/snippets");

  return (
    <div>
      <Head>
        <title>Snippets</title>
      </Head>

      <main className=''>
        <div className='my-12'>
          <h1 className='text-2xl text-indigo-100'>
            Code Snippets worth Sharing!
          </h1>
          <p className='text-indigo-200'>
            Create and browse snippets used every day in Web Development !
          </p>
          <Link href='/new'>
            <a className='inline-block px-4 py-2 mt-3 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline'>
              Create a Snippet!
            </a>
          </Link>
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}
