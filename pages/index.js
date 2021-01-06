import Head from "next/head";
import Link from "next/link";
import Snippet from "../components/Snippet";

export default function Home() {
  const snippets = [
    {
      id: 1,
      data: {
        name: "My first",
        language: "JavaScript",
        code: "console.log(Helloooooo);",
      },
    },
  ];
  return (
    <div>
      <Head>
        <title>Snippets</title>
      </Head>

      <main className=''>
        <div className='my-12'>
          <h1 className='text-indigo-100 text-2xl'>
            Code Snippets worth Sharing!
          </h1>
          <p className='text-indigo-200'>
            Create and browse snippets used every day in Web Development !
          </p>
          <Link href='/new'>
            <a className='mt-3 inline-block bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Create a Snippet!
            </a>
          </Link>
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              // snippetDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}
