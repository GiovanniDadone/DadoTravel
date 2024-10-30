import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { itemsArray } from "./Places";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClearButtonClick = () => {
    // Clear the input value if desired
    setInputValue("");
  };

  useEffect(() => {
       // Attach the event listener to the document
       document.addEventListener('mousedown', handleClearButtonClick);

       // Clean up the event listener on component unmount
       return () => {
         document.removeEventListener('mousedown', handleClearButtonClick);
       };
  }, [])

   // Function to generate filtered list items
   const generateListItems = (array, filterTag) => {
    // Filter the array based on the tag matching the input value
    const filteredItems = array.filter(item => item.tag === filterTag);
    // Map the filtered items to list elements
    return filteredItems.map(item => (
      <li key={item.id} className="">
        <div className="flex flex-col w-full p-4 cursor-pointer">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded">Visit</button>
          </div>
      </li>
    ));
     
  };

  const navigate = useNavigate();
  return (
    <div className=' bg-gradient-to-r from-black to-gray-600 text-white flex flex-row'>
      <div className='w-1/2 flex flex-row text-white justify-start items-center'>
        <img
          src='https://cdn.jsdelivr.net/gh/selfhst/icons/svg/adventurelog.svg'
          alt='company logo'
          className='h-12 w-12 my-6 mx-8'
        />
        <h1 className="text-4xl font-sans font-extrabold">DadoTravel</h1>
      </div>
      <div className='flex flex-row  text-white justify-around items-center w-1/3'>
        <h2
          onClick={() => navigate("/")}
          className='ml-2 text-xl cursor-pointer'>
          Home
        </h2>
        <h2
          onClick={() => navigate("/contacts")}
          className='ml-2 text-xl cursor-pointer'>
          Contacts
        </h2>
        <h2
          onClick={() => navigate("/about-us")}
          className='ml-2 text-xl cursor-pointer'>
          About Us
        </h2>
      </div>
      <div className='w-1/3 flex justify-end items-center'>
        <div className="flex flex-col items-center w-full">
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter destination or keyword...'
            className='w-full h-10 px-2 rounded-l-full focus:outline-none text-black placeholder-blue-600 pl-6'
          />
          {inputValue && (
            <div className="absolute bg-white shadow-lg rounded-lg w-1/4 p-2 my-16 text-black border border-black">
              <ul>
              <li className='text-lg font-bold mb-2'>Search Results:</li>
              {generateListItems(itemsArray, inputValue)}
              </ul>
            </div>
          )}
        </div>
        {inputValue && (
          <button
            onClick={handleClearButtonClick}
            className='bg-blue-500 text-white shadow-lg mr-3 my-4 px-4 -ml-16 rounded-full hover:bg-blue-600 transition-colors duration-300'>
            X
          </button>
        )}
        <button className='bg-blue-500 text-white px-3 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300'>Search</button>
      </div>
    </div>
  );
};
export default Navbar;
