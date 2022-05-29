import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 py-5 mt-32 max-w-6xl mx-auto border-t border-black border-opacity-10 text-gray-800 text-md">
      © {new Date().getFullYear()} Moodlifly. All ights reserved.
    </footer>
  );
};

export default Footer;
