import Link from "next/link";

export default function SnippetForm({ snippet }) {
  const createSnippet = console.log("creating snippet");
  const updateSnippet = console.log("updating snippet");

  return (
    //TODO: wrap with handleSubmit from react-hook-form
    <form onSubmit={snippet ? updateSnippet : createSnippet}>
      <div className='mb-4'>
        <label
          className='block text-yellow-100 text-sm font-bold mb-1'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full border bg-white rounded px-3 py-2 outline-none text-gray-700'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-yellow-100 text-sm font-bold mb-1'
          htmlFor='language'
        >
          Language
        </label>
        <select
          id='language'
          name='language'
          className='w-full border bg-white rounded px-3 py-2 outline-none text-gray-700'
        >
          <option className='py-1'>JavaScript</option>
          <option className='py-1'>HTML</option>
          <option className='py-1'>CSS</option>
        </select>
      </div>
      <div className='mb-4'>
        <label
          className='block text-yellow-100 text-sm font-bold mb-1'
          htmlFor='description'
        >
          Description
        </label>
        <textarea
          name='description'
          id='description'
          rows='3'
          className='resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
          placeholder='What does the snippet do?'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          className='block text-yellow-100 text-sm font-bold mb-1'
          htmlFor='code'
        >
          Code
        </label>
        <textarea
          name='code'
          id='code'
          rows='10'
          className='resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
          placeholder="console.log('helloworld')"
        ></textarea>
      </div>
      <button
        className='bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
        type='submit'
      >
        Save
      </button>
      <Link href='/'>
        <a className='mt-3 inline-block bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Cancel
        </a>
      </Link>
    </form>
  );
}
