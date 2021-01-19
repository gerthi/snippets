import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function SnippetForm({ snippet }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      code: snippet ? snippet.data.code : "",
      language: snippet ? snippet.data.language : "",
      description: snippet ? snippet.data.description : "",
      name: snippet ? snippet.data.name : "",
    },
  });

  const router = useRouter();

  const createSnippet = async (data) => {
    const { code, language, description, name } = data;
    try {
      await fetch("/api/createSnippet", {
        method: "POST",
        body: JSON.stringify({ code, language, description, name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const updateSnippet = async (data) => {
    const { code, language, description, name } = data;
    const id = snippet.id;
    try {
      await fetch("/api/updateSnippet", {
        method: "PUT",
        body: JSON.stringify({ id, code, language, description, name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(snippet ? updateSnippet : createSnippet)}>
      <div className='mb-4'>
        <label
          className='block mb-1 text-sm font-bold text-white'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full px-3 py-2 text-gray-700 bg-white border rounded outline-none'
          ref={register({ required: true })}
        />
        {errors.name && (
          <p className='text-xs font-bold text-yellow-300 '>
            *Name is required
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block mb-1 text-sm font-bold text-white'
          htmlFor='language'
        >
          Language
        </label>
        <select
          id='language'
          name='language'
          className='w-full px-3 py-2 text-gray-700 bg-white border rounded outline-none'
          ref={register({ required: true })}
        >
          <option className='py-1'>JavaScript</option>
          <option className='py-1'>HTML</option>
          <option className='py-1'>CSS</option>
        </select>
        {errors.language && (
          <p className='text-xs font-bold text-yellow-300'>
            *Language is required
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block mb-1 text-sm font-bold text-white'
          htmlFor='description'
        >
          Description
        </label>
        <textarea
          name='description'
          id='description'
          rows='3'
          className='w-full px-3 py-2 text-gray-700 border rounded-lg resize-none focus:outline-none'
          placeholder='What does the snippet do?'
          ref={register({ required: true })}
        ></textarea>
        {errors.description && (
          <p className='text-xs font-bold text-yellow-300'>
            *Description is required
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block mb-1 text-sm font-bold text-white'
          htmlFor='code'
        >
          Code
        </label>
        <textarea
          name='code'
          id='code'
          rows='10'
          className='w-full px-3 py-2 text-gray-700 border rounded-lg resize-none focus:outline-none'
          placeholder="console.log('helloworld')"
          ref={register({ required: true })}
        />
        {errors.code && (
          <p className='text-xs font-bold text-yellow-300'>*Code is required</p>
        )}
      </div>
      <button
        className='px-4 py-2 mr-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline'
        type='submit'
      >
        Save
      </button>
      <Link href='/'>
        <a className='inline-block px-4 py-2 mt-3 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline'>
          Cancel
        </a>
      </Link>
    </form>
  );
}
