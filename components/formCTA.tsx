import React, { useState } from "react";

type Props = {
  inputNames: string[];

  submitButton: string;
};

export default function FormsCTA({ inputNames, submitButton }: Props) {
  return (
    <>
      <form
        action="/"
        method="post"
        className="grid grid-cols-1 gap-6 items-center text-center"
      >
        {inputNames.map((name: any) => (
          <input
            id={name}
            name={name}
            key={name}
            placeholder={name[0].toUpperCase() + name.substr(1)}
            className="form-input px-4 py-3 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
          />
        ))}
        <button
          type="submit"
          className="inline-flex w-64 items-center px-8 py-3 text-white transition bg-indigo-700 rounded-full shadow-lg focus:outline-none focus:ring hover:bg-indigo-600"
        >
          <span className="text-sm font-medium"> {submitButton} </span>

          <svg
            className="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </>
  );
}
