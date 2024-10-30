const Home = () => {
  return (
    <div className='flex flex-row mt-16'>
      <div className='flex flex-col ml-12 mt-2'>
        <h1 className='text-7xl -mb-3 mt-8'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <h1 className='text-7xl -mb-3'>|</h1>
        <button>
          <img
            src='../images/instagram.svg'
            alt='instagram logo'
            className='h-12 w-12 mb-2 mt-7'
          />
        </button>
        <button>
          <img
            src='../images/facebook.svg'
            alt='facebook logo'
            className='h-12 w-12 my-2'
          />
        </button>
        <button>
          <img
            src='..//images/twitter.svg'
            alt='twitter logo'
            className='h-12 w-12 my-2'
          />
        </button>
      </div>
      <div className='flex flex-col h-screen pl-28 mt-6'>
        <h1 className='text-7xl font-extrabold pb-6 pt-12'>EXPLORE</h1>
        <h1 className='text-7xl font-extrabold py-4'>DREAM</h1>
        <h1 className='text-7xl font-extrabold py-4'>TRAVEL</h1>
        <h1 className='text-white text-wrap text-lg w-1/5 py-4'>It encourages exploration of unfamaliar territories, embracing diverse cultures and landscapes, while pursuing the desired destination that captivates the heart and ignites a sense of wonder</h1>
        <button className='w-1/6 bg-blue-500 hover:bg-blue-700 transition-colors duration-300 text-white font-bold mt-12 py-6 px-4 rounded'>Book Now</button>
      </div>
    </div>
  );
};
export default Home;
