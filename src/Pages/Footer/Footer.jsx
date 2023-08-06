import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo2.png'
const Footer = () => {
  return (
    <>
      <div className="bg-stone-800 p-10">
        <div className="flex flex-col items-center">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-20" alt="artsoul Logo" />
          </a>
          <p className="text-center text-slate-300">Subscribe to our mailing list</p>
          <div className="mb-6 p-10 flex flex-col items-center sm:flex-row sm:items-center">
            <input
              type="email"
              id="email"
              className="mb-2 bg-inherit border border-gray-300 hover:text-gray-50 text-sm rounded block pr-48 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="example@gmail.com"
            />
            <button
              type="button"
              className="text-white bg-orange-400 hover:bg-orange-500 font-medium rounded text-sm p-4 text-center mb-2"
            >
              Subscribe
            </button>
          </div>
        </div>

        <footer className="bg-transparent dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
                <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 pr-10 pl-10">
                  <h2 className="mb-6 text-3xl font-semibold text-slate-100 uppercase dark:text-white">Menu</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Instructors
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Classes
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:underline">
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 pr-10 pl-10">
                  <h2 className="mb-6 text-3xl font-semibold text-slate-100 uppercase dark:text-white">Classes</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Painting
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Sketch
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Drawing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Sculpture
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Digital
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 pr-10 pl-10">
                  <h2 className="mb-6 text-3xl font-semibold text-slate-100 uppercase dark:text-white">Contact</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        1 888 123 4567
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        info@artsoul.com
                      </a>
                    </li>
                    <li className="mb-1">
                      <p>565 Potter Ave,Ridgewood</p>
                    </li>
                    
                    <li>
                      <p>NY 11385</p>
                    </li>
                  </ul>
                </div>
                <div className="text-center pr-10 pl-10">
                  <h2 className="mb-6 text-3xl font-semibold text-slate-100 uppercase dark:text-white">Social</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Facebook
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Dribbble
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Instagram
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="/" className="hover:underline">
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sm:flex sm:items-center sm:justify-center m-10">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023 <a href="/" className="hover:underline">
                  ArtSoul
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
