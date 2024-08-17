/* eslint-disable react/prop-types */
// import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import LeaveAdvice from "./LeaveAdvice";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ExaminationAdvice from "./ExaminationAdvice";

const Profile = ({setTab,tab }) => {
const leaveAdviceRef = useRef();
const examinationAdviceRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => leaveAdviceRef.current,
  });
    const printExamAdvice = useReactToPrint({
    content: () => examinationAdviceRef.current,
  });

//   const handlePrint = () => {
//     const input = leaveAdviceRef.current;

//     html2canvas(input, { width: 800, height: 600 }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'px',
//         format: [canvas.width, canvas.height],
//       });

//       pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
//       pdf.save('download.pdf');
//     });
//   };
  return (
      <div  className="relative flex flex-col min-w-0 rounded break-words border bg-white shadow">
       <LeaveAdvice ref={leaveAdviceRef}/>
       <ExaminationAdvice ref={examinationAdviceRef}/>
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
                            <div className="flex gap-4">
                            <Button className="outline-none bg-blue-500 text-white rounded shadow transition-all hover:bg-blue-400 ease-in-out" onClick={handlePrint}>Leave Advice</Button>
                            
                            <Button className="outline-none border border-blue-500 text-blue-500 rounded shadow transition-all hover:bg-blue-400 hover:text-white ease-in-out" onClick={printExamAdvice}>Examination Advice</Button>
                            </div>
                         
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