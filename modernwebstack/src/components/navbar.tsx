import React from "react";

interface NavbarProps {
  title: string;
  links: { name: string; url: string }[];
}

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-6">
      <div className="text-white text-2xl font-bold">Modern Web Stack</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
