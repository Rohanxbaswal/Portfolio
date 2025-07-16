// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-48 py-20 flex flex-col gap-28 ">
      {/* Intro */}
      <div className="mt-20 text-center font-kopub  ">
        <h2 className="lg:text-3xl sm:text-xl tracking-widest text-gray-600 mb-4 ">I’m a just curious mind-</h2>
        <div className="text-gray-500 tracking-widest lg:text-xl sm:text-xl leading-loose">
          with a deep love for clarity, expression, and<br />
          the craft of building things that matter.<br />
          Design shapes my eye, development fuels my logic,<br />
          and photography gives me pause.
        </div>
      </div>

      {/* 3-Column Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 text-center sm:text-left font-kopub ">
        {/* Column 1 */}
        <div className=''>
          <h3 className="text-xl sm:text-3xl font-semibold tracking-widest mb-3 ">Who i am?</h3>
          <p className="text-gray-500 text-md font-semibold font-koho ">
            Rohan Baswal, bachelors student at Hansraj college,<br />
            love to interact with new people and if we collaborate<br />
            in some project that’s the best part of my day
          </p>
        </div>

        {/* Column 2 */}
        <div className=' text-center'>
          <h3 className="text-xl sm:text-3xl  font-semibold tracking-widest mb-3 ">Tools i use?</h3>
          <div className=' font-koho '>
          <p className="text-gray-800 text-md font-bold mb-1">Design</p>
          <ul className="text-gray-500 text-sm font-semibold ml-4">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Canva</li>
            <li>Figma</li>
          </ul>
          
          <p className="text-gray-800 text-sm font-bold mt-4 mb-1">Development</p>
          <ul className="text-gray-500 text-sm font-semibold ml-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        </div>

        {/* Column 3 */}
        <div className=' '>
          <h3 className="text-xl sm:text-3xl lg:text-right font-semibold tracking-widest mb-3 ">Fun fact!</h3>
          <p className="text-gray-500 text-md font-semibold lg:text-right font-koho ">
            I overthink button colors, camera angles, and conversations I had<br />
            three years ago. But it’s all part of the creative process, right?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
