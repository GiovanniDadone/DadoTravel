// ContactUsPage.jsx

import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Ideally, this is where you would send the data to a server (via fetch or axios)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='container mx-auto p-6 mt-32  '>
      <h1 className='text-3xl font-bold mb-6 text-center'>Contact Us</h1>
      <div className='flex flex-col items-center '>
        {submitted && <div className='bg-green-100 text-green-700 p-4 mb-6 rounded-md shadow-md w-full max-w-md text-center'>Thank you for reaching out! We will get back to you soon.</div>}

        {/* Contact Form */}
        <form
          onSubmit={handleFormSubmit}
          className='w-1/3 bg-white p-6 rounded-lg shadow-md'>
          <div className='mb-4'>
            <label className='block mb-2 text-gray-600'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full p-2 border rounded-lg'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-gray-600'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full p-2 border rounded-lg'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-gray-600'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              className='w-full p-2 border rounded-lg'
              rows='4'
              placeholder='Your Message'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
            Send Message
          </button>
        </form>

        {/* Optional Contact Information */}
        <div className='mt-8 w-1/2 text-center'>
          <h2 className='text-2xl font-bold mb-2'>Contact Information</h2>
          <p
            className='text-white mb-1'
            style={{ textShadow: "1px 1px 0px black, -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black" }}>
            Email: support@example.com
          </p>
          <p
            className='text-white mb-1'
            style={{ textShadow: "1px 1px 0px black, -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black" }}>
            Phone: +1 (555) 123-4567
          </p>
          <p
            className='text-white'
            style={{ textShadow: "1px 1px 0px black, -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black" }}>
            Address: 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
