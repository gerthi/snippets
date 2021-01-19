import Head from "next/head";
import { getSnippetById } from "../../utils/Fauna";
import SnippetForm from "../../components/SnippetForm";

export default function Home({ snippet }) {
  return (
    <div>
      <Head>
        <title>Update Snippet</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-lg mx-auto'>
        <h1 className='mb-8 text-2xl text-yellow-400'>Update Snippet</h1>
        <SnippetForm snippet={snippet} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const snippet = await getSnippetById(id);
    return {
      props: { snippet },
    };
    console.log(snippet);
  } catch (err) {
    console.error(err);
    context.res.statusCode = 302;
    context.res.setHeader("Location", "/");
    return { props: {} };
  }
}
