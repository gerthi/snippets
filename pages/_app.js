import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-full p-10 min-h-screen'>
      <div className='max-w-2xl mx-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
