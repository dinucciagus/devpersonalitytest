import React from "react";
import { Link } from "react-router-dom";

export default function Linkedin({ text }) {
  return (
    <Link target="_blank" to="https://www.linkedin.com/in/agustina-dinucci/">
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className={
          "mb-2 hover:bg-pink1 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal hover:text-white hover:shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-" +
          text
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </button>
    </Link>
  );
}
