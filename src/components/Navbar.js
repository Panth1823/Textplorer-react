import React from "react";

export default function Navbar(props) {
  return (
 
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class=" max-w-xxl flex flex-wrap items-center justify-between mx-auto  p-4">
  <a href="https://github.com/Panth1823/Textplorer-react" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo" />
      <span class=" align-middle text-2xl font-semibold whitespace-nowrap dark:text-white">Textplorer 💬</span>
  </a>
  <div class="flex md:order-2">
      
      
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    
   
    </ul>
  </div>
  </div>
</nav>

  );
}
