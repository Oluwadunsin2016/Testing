/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
// import DropDown from "../components/DropDown";


const SubMenu = ({ data }) => {
  const {sidebarOpen, tabClicked, toggleTab, sidebarMinimized, setShowminimizedsubMenu, setExtendedSubMenuData} = useContext(dashboardContext)
  const { pathname } = useLocation();
  // const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

 
  const trigger = useRef(null);

  const showSubMenu = ()=>{
    if(sidebarMinimized){
      setShowminimizedsubMenu(true)
      setExtendedSubMenuData(data)
    }
    toggleTab(data.name)
 
    // if (sidebarOpen) {
    //   setSubMenuOpen(!subMenuOpen)
    // }else{
    //   setShowDropDown(true)
    // }
  }


  useEffect(() => {
    const clickHandler = ({ target }) => {
          if ( !showDropDown ||
          trigger.current.contains(target)
          )
          return;
          setShowDropDown(false);
      }
    
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    }
  )
  
  const variants = {
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.1 }
    })
  }


  
  return (
    <>
      <li
     
        className={`relative z-40  hover:text-white hover:cursor-pointer ${!sidebarMinimized && tabClicked === data.name && "bg-sidebarSubMenuBg"} ${sidebarMinimized ? 'border-b border-gray-800 py-4' : 'border-0 border-transparent' } ${sidebarMinimized ? 'flex flex-col text-center justify-center gap-1 cursor-pointer  duration-300 font-medium text-gray-400': 'link'}`}
        onClick={showSubMenu} ref={trigger}
      >
        <data.icon size={sidebarMinimized ? 30 :23}  className={`min-w-max ${sidebarMinimized && "mx-auto"}`} />
        
        <p className="flex-1 capitalize">{data.name}</p>

        {
          !sidebarMinimized && (
            <IoIosArrowDown
              className={`${(tabClicked !== data.name ) ? "-rotate-90" :"rotate-30"} duration-200 `}
            />
          ) 
        }
      </li>



      {
        sidebarOpen && (
          <motion.ul
        
            variants={variants}
            animate={
              !sidebarMinimized && tabClicked === data.name
                ? {
                    height: "fit-content",
                  }
                : {
                    height: 0,
                  }
            }
            className={`flex h-0 flex-col pl-12 text-[0.8rem] z-10 font-normal overflow-hidden w-[15rem] relative -top-2 rounded-br-md ${(tabClicked === data.name ||pathname.includes(data.name)) && "bg-sidebarSubMenuBg"}` }
          >
            <div className={`bg-gray-700 left-3 h-full absolute w-[0.9px] mx-3.5 border-1 ${(tabClicked === data.name ||pathname.includes(data.name)) ? 'block': 'hidden'}`}></div>

            {data.menus?.map((menu) => (
              <li key={menu.name}
            
              >
                <NavLink

                  to={`/${data.name}${menu.route}`}
                  className="link !bg-transparent capitalize relative hover:text-white hover:cursor-pointer"
                >
                  {
                    pathname.includes(menu.route) && (

                      <span className="w-2 h-2 rounded-full bg-btnColor absolute -left-[1.6rem] duration-200 transition-all"></span>
                    )
                  }
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </motion.ul>

        )
      }
      {/* {
        showDropDown  && <DropDown uiItems={data} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
      } */}
    </>
  );
};

export default SubMenu;
