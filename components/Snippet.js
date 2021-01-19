import React from "react";
import Code from "./code";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Snippet({ snippet, snippetDeleted }) {
  const router = useRouter();

  const deleteSnippet = async () => {
    try {
      await fetch("/api/deleteSnippet", {
        method: "DELETE",
        body: JSON.stringify({ id: snippet.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      snippetDeleted();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className='p-4 my-2 bg-gray-100 rounded-md shadow-lg'>
      <div className='flex items-center justify-between mb-2'>
        <h2 className='text-xl font-bold text-gray-800'>{snippet.data.name}</h2>
        <span className='px-2 py-1 text-xs font-bold text-yellow-500 rounded-lg '>
          {snippet.data.language}
        </span>
      </div>
      <p className='mb-4 text-gray-900'>{snippet.data.description}</p>
      <Code code={snippet.data.code} />
      <Link href={`/edit/${snippet.id}`}>
        <a className='mr-2 text-gray-500'>Edit</a>
      </Link>
      <button onClick={deleteSnippet} className='my-2 ml-2 text-red-400'>
        Delete
      </button>
    </div>
  );
}
