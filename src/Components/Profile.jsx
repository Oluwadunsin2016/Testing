/* eslint-disable react/prop-types */
// import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const Profile = ({setTab,tab}) => {
  return (
      <div  className="relative flex flex-col min-w-0 rounded break-words border bg-white shadow">
            <div  className="flex-auto p-6 pb-0">
                <div  className="flex flex-wrap  items-center">
                    <div  className="md:w-1/4 mx-auto md:mx-0">
                        <div  className="text-center md:border-r md:pr-8 mx-auto md:mx-0 flex flex-col items-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"  className="w-[6rem] h-[6rem] rounded-full" alt=""/>
                            <h4  className="text-[rgb(13,110,253)] font-[500] mt-3 mb-2 text-[20.889px]">Jansh Wells</h4>
                            <h5  className="text-gray-400 font-[500] mb-4 text-[20px]">Web Designer</h5>
                        </div>
                    </div>
                    {/* <!-- end col --> */}
                    <div  className="md:w-3/4 px-4">
                        <div  className="ms-3">
                            <div>
                                <h4  className="mb-2 text-[20.889px] font-[500]">Biography</h4>
                                <p  className="mb-0 text-[16px] font-[400] text-[rgb(108,117,125)]">Hi I'm Jansh, has been the industry's standard
                                    dummy text To an English person alteration text.</p>
                            </div>
                            <div  className="flex flex-wrap  my-4 ">
                                <div  className="md:w-full pr-4 pl-4">
                                    <div>
                                    
                                        <p  className="text-[16px] font-[400] text-[rgb(108,117,125)] mb-2 flex items-center gap-2"> <FaEnvelope /><span>Janshwells@probic.com</span>
                                        </p>
                                        <p  className="text-[16px] font-[400] text-[rgb(108,117,125)] mb-0 flex items-center gap-2"><IoMdCall /><span>418-955-4703</span> 
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!-- end row --> */}
                         
                            <ul  className="flex gap-8 py-4">
                                <li  className={`${tab=='Projects'&& 'border-b-2 border-[rgb(3,142,220)]'} pb-2 cursor-pointer text-[rgb(3,142,220)]`} onClick={()=>setTab("Projects")}>
                                        <p  className="">Projects</p>
                                </li>
                                {/* <!-- end li --> */}
                                <li  className={`${tab=='Tasks'&& 'border-b-2 border-[rgb(3,142,220)]'} pb-2 cursor-pointer text-[rgb(3,142,220)]`} onClick={()=>setTab("Tasks")}>
                                        <p  className="">Tasks</p>
                                </li>
                                {/* <!-- end li --> */}
                                <li  className={`${tab=='Team'&& 'border-b-2 border-[rgb(3,142,220)]'} pb-2 cursor-pointer text-[rgb(3,142,220)]`} onClick={()=>setTab("Team")}>
                                 
                                        <p  className="">Team</p>
                                </li>
                                {/* <!-- end li --> */}
                            </ul>
                            {/* <!-- end ul --> */}
                        </div>
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end card body --> */}
        </div>
  )
}

export default Profile