import React, { useState } from 'react'

// react router dom@6.3.0
import { Link } from 'react-router-dom'

// react icons
import { AiOutlineHome } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

// css
import '../index.css'

// item of sideBar
const item = [
  { name: 'Home', url: '/', icon: <AiOutlineHome /> },
  { name: 'Search', url: '/Search', icon: <BiSearch /> },
  { name: 'Photos', url: '/Photos', icon: <MdOutlinePhotoSizeSelectActual /> },
  { name: 'Profile', url: '/Profile', icon: <CgProfile /> }
]

const Navbar = () => {
  const [active, setActive] = useState<number>()
  return (
    <div className="fixed flex justify-center items-center gap-12 text-black text-2xl shadow-md bottom-0 right-0 bg-whiteNavbar w-screen h-16 bg-white z-50">
      {item.map((item, i) => (
        <div key={i} className="flex w-10 ">
          <span
            onClick={() => setActive(i)}
            className={`text-2xl cursor-pointer duration-500 ${
              i === active && '-mt-1 mr-1 text-blue-600'
            }`}
          >
            <Link to={item.url}>
            {item.icon}
            </Link>
          </span>

          <small
            className={` ${
              active === i
                ? 'duration-200 opacity-100 text-sm sidebar-icon-state text-blue-600'
                : 'opacity-0'
            } `}
          >
            {item.name}
          </small>
        </div>
      ))}
    </div>
  )
}

export default Navbar
