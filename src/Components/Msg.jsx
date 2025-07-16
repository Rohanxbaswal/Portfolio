import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Msg() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dqcbuwg',        // 🔁 Replace with your EmailJS service ID
      'template_zh8lt1c',       // 🔁 Replace with your EmailJS template ID
      form.current,
      'hNScjzprHkc36zGua'         // 🔁 Replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email send error:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="bg-white flex flex-col items-center gap-16 relative px-4 min-h-screen lg:mx-40 lg:my-10 sm:mx-20 sm:my-14 pt-20">
      {/* Top Heading */}
      <div className="flex flex-col gap-8 w-full items-center mt-10 font-kopub">
        <div className="text-center space-y-2 max-w-xl">
          <h2 className="text-xl md:text-3xl font-serif font-thin tracking-widest ">
            feel free to contact me!
          </h2>
          <p className="text-gray-400 text-sm md:text-xl font-serif font-thin tracking-widest">
            here or at any other platform
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-[600px] bg-transparent p-6 sm:p-10 rounded-lg outline outline-8 outline-gray-200 flex flex-col gap-4 font-kopub font-extralight"
      >
        <input
          type="text"
          name="name"
          placeholder="first name..."
          className="p-4 bg-gray-200 rounded-lg text-gray-700 text-lg tracking-widest w-full"
          required
        />

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            name="email"
            placeholder="email address"
            className="p-4 bg-gray-200 rounded-lg text-gray-700 text-lg tracking-widest w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="+91 0123456789"
            className="p-4 bg-gray-200 rounded-lg text-gray-700 text-lg tracking-widest w-full"
          />
        </div>

        <textarea
          name="message"
          rows={5}
          placeholder="you look great.."
          className="p-4 bg-gray-200 rounded-lg text-gray-700 text-lg tracking-widest w-full resize-none"
          required
        />

        <button
          type="submit"
          className=" mt-4 py-3 px-6 rounded-lg bg-[#FF5C5C] text-white text-lg tracking-widest hover:bg-[#e04a4a] active:scale-95 transition-transform duration-100 ease-in-out "
        >
          Send
        </button>
      </form>

      {/* Socials */}
      <div className="absolute bottom-1 flex flex-col sm:flex-row justify-center items-center text-sm tracking-widest font-kopub gap-2 sm:gap-8 w-full text-center px-4">
        <div>
          <a className="text-blue-400 font-bold">linkedin/</a> @rohanbaswal
        </div>
        <div>
          <a className="text-red-400 font-bold">gmail/</a> @work.rohanbaswal@gmail.com
        </div>
        <div>
          <a className="text-pink-400 font-bold">instagram/</a> @try.rohan
        </div>
      </div>
    </div>
  );
}

export default Msg;
