import { Fragment, useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleClick=()=>{
      setOpen(!open)
    }
  return (
    <Fragment>
        <section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:gap-8">
              <div className="text-center ">
                <h2 className="" style={{ fontWeight: 500, fontSize: '5vh' }}>
                  Dashboard
                </h2>
                <div className="text-gray-400">
                  <span className='font-medium'>HOME </span>
                  <span> {'>'} </span>
                  <span className=''>DASHBOARD </span>
                </div>
              </div>

              <div className="relative">
                <div className=" items-center overflow-hidden border px-3 py-3 rounded flex gap-2 cursor-pointer" onClick={handleClick}>
                    <button className="text-white bg-sky-500 rounded h-10 text-center w-10 font-semibold">FM</button>
                    <div>
                      <h4 className="font-semibold">FrontendMatter Inc.</h4>
                      <div>
                        <small className="text-gray-400">Select Company </small>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 my-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                <div
                  className={`absolute w-[90%] divide-y divide-gray-100 rounded-md border-gray-100 bg-white shadow-lg animate-fade-down animate-once animate-duration-300 ${!open&&'hidden'}`}
                  role="menu"
                >
                  <div className="">
                    <strong className="block px-4 py-5 text-sm font-semibold "> Select Company </strong>

                    <div
                      className=" py-2 text-sm px-4 text-gray-500 hover:bg-gray-50 hover:text-gray-700 flex gap-2 cursor-pointer border-l-[5px] border-sky-500"
                      style={{}}
                    >
                      <button className="text-white bg-sky-500 rounded h-10 text-center w-10 font-semibold">FM</button>
                      <div>
                        <h4 className="font-semibold">FrontendMatter Inc.</h4>
                        <div>
                          <small className="text-gray-400">Select Company </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" py-2 text-sm px-4 text-gray-500 hover:bg-gray-50 hover:text-gray-700 rounded flex gap-2 cursor-pointer"
                      style={{}}
                    >
                      <button className="text-white bg-cyan-400 rounded h-10 text-center w-10 font-semibold">HH</button>
                      <div>
                        <h4 className="font-semibold">HumaHuma Inc.</h4>
                        <div>
                          <small className="text-gray-400">Select Company </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] rounded-lg my-auto flex lg:justify-end justify-center" >
            <div className="flex gap-3 lg:float-righ ">
              {
                [{number: ''},2].map((item, index)=>{
                  return(
              <div className="border-r px-2" key={index}>
                <h5 className='font-semibold'>$12.3k</h5>
                <div className='flex gap-2'>
                  <span className='text-gray-400'>Earnings </span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 my-auto text-sky-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                </div>
              </div>
                  )
                })
              }
              <button className='bg-cyan-400 rounded text-white font-semibold px-6 py-0'>NEW REPORT</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
