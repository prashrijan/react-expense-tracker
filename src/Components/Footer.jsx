import React from "react";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm sm:text-center text-gray-400">
          © 2024
          <a href="https://github.com/prashrijan" className="hover:underline">
            Prashrijan Shrestha
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
