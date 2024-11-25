import React from 'react'

const Header = ({showMenuItems}) => {
  return (<>

  <div
  style={{float:'right'}}
    className="p-2 cursor-pointer sm:hidden border border-[#E7E7E7] hover:border-blue-600 group rounded-md flex justify-center items-center"
    onClick={showMenuItems}
  >
    <svg
      className="group-hover:text-blue-600 text-[#637381] w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </div>
  </>)
}

export default Header