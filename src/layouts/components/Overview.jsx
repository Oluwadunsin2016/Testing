/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  Line,
  LineChart,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Doughnut, Pie } from "react-chartjs-2";
import ApexCharts from "apexcharts";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import DoughnutChart from "./DoughnutChart";
import LineChartComponent from "./LineChartComponent";
import WorldMap from "./WorldMap";

Chart.register(CategoryScale);

const Overview = () => {
  const [trafficTab, setTrafficTab] = useState('sessions')
  const [trafficData, setTrafficData] = useState([
    { name: "JAN", amount: 10 },
    { name: "FEB", amount: 2 },
    { name: "MAR", amount: 5 },
    { name: "APR", amount: 15 },
    { name: "MAY", amount: 10 },
    { name: "JUN", amount: 12 },
    { name: "JUL", amount: 15 },
    { name: "AUG", amount: 25 },
    { name: "SEPT", amount: 22 },
    { name: "OCT", amount: 30 },
    { name: "NOV", amount: 25 },
    { name: "DEC", amount: 40 },
  ]);
const [currentTab, setCurrentTab] = useState("traffic")
const [DoughnutData, setDoughnutData] = useState([35,25,40])

// Selecting the region on map
 const mapRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState('US');

    const handleRegionClick = (regionCode) => {
    setSelectedRegion(regionCode);

    if (mapRef.current) {
    console.log(mapRef.current);
      mapRef.current.setSelectedRegions([regionCode]);
    }
  };

const selectTab=(tab)=>{
setTrafficTab(tab)
if (tab==='sessions') {
      setTrafficData([
      { name: "JAN", amount: 10 },
      { name: "FEB", amount: 2 },
      { name: "MAR", amount: 5 },
      { name: "APR", amount: 15 },
      { name: "MAY", amount: 10 },
      { name: "JUN", amount: 12 },
      { name: "JUL", amount: 15 },
      { name: "AUG", amount: 25 },
      { name: "SEPT", amount: 22 },
      { name: "OCT", amount: 30 },
      { name: "NOV", amount: 25 },
      { name: "DEC", amount: 40 },
    ]);
} else {
    setTrafficData([
      { name: "JAN", amount: 7 },
      { name: "FEB", amount: 35 },
      { name: "MAR", amount: 12 },
      { name: "APR", amount: 27 },
      { name: "MAY", amount: 34 },
      { name: "JUN", amount: 17 },
      { name: "JUL", amount: 19 },
      { name: "AUG", amount: 30 },
      { name: "SEPT", amount: 28 },
      { name: "OCT", amount: 32 },
      { name: "NOV", amount: 24 },
      { name: "DEC", amount: 49 },
    ]); 
}
}
  

const tab=(recentTab)=>{
setCurrentTab(recentTab)
if (recentTab==='purchase') {
    setDoughnutData([60,30,10])
} else if(recentTab==='quotes'){
    setDoughnutData([30,50,20])   
}else{
    setDoughnutData([35,25,40])   
}
}




  const data = [
    { name: "SUN", value: 400 },
    { name: "MON", value: 200 },
    { name: "TUE", value: 450 },
    { name: "WED", value: 460 },
    { name: "THUR", value: 220 },
    { name: "FRI", value: 380 },
    { name: "SAT", value: 800 },
  ];

  const data2 = [
    { name: "JAN", amount: 10 },
    { name: "FEB", amount: 2 },
    { name: "MAR", amount: 5 },
    { name: "APR", amount: 15 },
    { name: "MAY", amount: 10 },
    { name: "JUN", amount: 12 },
    { name: "JUL", amount: 15 },
    { name: "AUG", amount: 25 },
    { name: "SEPT", amount: 22 },
    { name: "OCT", amount: 30 },
    { name: "NOV", amount: 25 },
    { name: "DEC", amount: 40 },
  ];
  return (
    <div>
      <div className="py-3 flex items-center gap-2">
        <h1>OVERVIEW</h1>
        <div className="h-[1px] bg-gray-300 w-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 font-Lato">
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#D4D5D6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <div className="flex gap-4 items-center">
            <h4 className="text-3xl font-bold">3.6k</h4>
            <div>
              <strong>Visits</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">31.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            role="img"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="dolarIconTitle"
            stroke="#D4D5D6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title id="dolarIconTitle">Dolar</title>{" "}
              <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16"></path>{" "}
            </g>
          </svg>
          <div className="flex gap-4 items-center">
            <h4 className="text-3xl font-bold">$12.3k</h4>
            <div>
              <strong>Sales</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">51.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center gap-2">
          <div className="flex gap-4 items-center">
            <h4 className="text-3xl font-bold">$8.3k</h4>
            <div>
              <strong>Products</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">31.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <LineChart width={250} height={80} data={data}>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2196F3" />
          </LineChart>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center gap-2">
          <div className="flex gap-4 items-center">
            <h4 className="text-3xl font-bold">$15.0k</h4>
            <div>
              <strong>Courses</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">31.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <LineChart width={250} height={80} data={data}>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2196F3" />
          </LineChart>
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="DoughnutChart bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav
                className="-mb-px flex gap-6 justify-center mt-4"
                aria-label="Tabs"
              >
                <div
                  className={`border-b-2 font-medium cursor-pointer px-1 pb-4 text-sm ${currentTab==='traffic'?'border-sky-500   text-black':'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                  onClick={()=>tab('traffic')}
                >
                  Traffic
                </div>
                <div
                  className={`border-b-2 font-medium cursor-pointer px-1 pb-4 text-sm ${currentTab==='purchase'?'border-sky-500   text-black':'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                  onClick={()=>tab('purchase')}
                >
                  Purchase
                </div>

                <div
                  className={`border-b-2 font-medium cursor-pointer px-1 pb-4 text-sm ${currentTab==='quotes'?'border-sky-500   text-black':'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                  onClick={()=>tab('quotes')}
                >
                  Quotes
                </div>
              </nav>
            </div>
        <DoughnutChart DoughnutData={DoughnutData}/>
           
          </div>
          <div className="lineChart bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav
                className="grid grid-cols-2 h-[6rem] cursor-pointer bg-[#F5F7FA]"
                aria-label="Tabs"
              >
                <div
                  className={`flex transition-all flex-col items-center justify-center ${
                    trafficTab==='sessions'
                      ? "border-t-[3px] border-sky-500 bg-white text-black"
                      : "text-gray-500 border"
                  }`}
                  onClick={()=>selectTab('sessions')}
                >
                  <strong className="text-sm">Sessions</strong>
                  <h4 className="text-3xl font-bold">18.3k</h4>
                </div>
                <div
                  className={`flex flex-col items-center justify-center ${
                    trafficTab==='orders'
                      ? "border-t-[3px] border-sky-500 bg-white text-black"
                      : "text-gray-500 border"
                  }`}
                  onClick={()=>selectTab('orders')}
                >
                  <strong className="text-sm">Orders</strong>
                  <h4 className="text-3xl font-bold">$8.9k</h4>
                </div>
              </nav>
            </div>
            
            <LineChartComponent trafficData={trafficData}/>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          {/* nav */}
          <nav
            className="grid grid-cols-4 cursor-pointer border-b"
            aria-label="Tabs"
          >
            <div className="col-span-1 border-r px-4 py-3">
              <strong className="text-sm">Revenue</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs">$203k</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className="col-span-3 px-4 py-3 flex items-center justify-between">
              <div>
                <strong className="text-sm">Employees</strong>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-xs">264</p>
                  <svg
                    fill="#00BCC2"
                    height="10px"
                    width="10px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.01 512.01"
                    xmlSpace="preserve"
                    className="cursor-pointer"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                height="25px"
                width="25px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                    fill="#6B7280"
                  ></path>{" "}
                  <path
                    d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                    fill="#6B7280"
                  ></path>{" "}
                  <path
                    d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                    fill="#6B7280"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </nav>
{/* vector map */}
<WorldMap mapRef={mapRef}/>

          <div className=" px-4">
            {/* Alert */}
            <div className="flex gap-2 p-2 items-center bg-[#FEFBF5] border border-[#F7E7C8] rounded-md mt-2">
              <svg
                viewBox="0 0 24 24"
                height="25px"
                width="25px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#E4A93C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="text-sm">
                <b>Congrats to the New York Team</b> For the excellent revenue
                so far
              </p>
            </div>
            {/* Progress */}
            <div className="my-4">
              <div className="mt-2 cursor-pointer" onClick={()=>handleRegionClick("US")} >
                <h3 className="font-bold text-sm">New York</h3>
                <div className="flex items-center gap-2">
                  <span className="relative block rounded-full bg-gray-200 w-full h-1">
                    <span
                      className={`block rounded-full h-1 text-center ${selectedRegion=='US'?'bg-sky-500':'bg-[#C2C6C9]'}`}
                      style={{ width: "72%" }}
                    ></span>
                  </span>
                  <span className="text-sm"> 72k</span>
                </div>
              </div>
              <div className="mt-2 cursor-pointer" onClick={()=>handleRegionClick("VA")} >
                <h3 className="font-bold text-sm">Vatican City</h3>
                <div className="flex items-center gap-2">
                  <span className="relative block rounded-full bg-gray-200 w-full h-1">
                    <span
                      className={`block rounded-full h-1 text-center ${selectedRegion=='VA'?'bg-sky-500':'bg-[#C2C6C9]'}`}
                      style={{ width: "39%" }}
                    ></span>
                  </span>
                  <span className="text-sm"> 39k</span>
                </div>
              </div>
              <div className="mt-2 cursor-pointer" onClick={()=>handleRegionClick("AU")} >
                <h3 className="font-bold text-sm">Sydney</h3>
                <div className="flex items-center gap-2">
                  <span className="relative block rounded-full bg-gray-200 w-full h-1">
                    <span
                      className={`block rounded-full h-1 text-center ${selectedRegion=='AU'?'bg-sky-500':'bg-[#C2C6C9]'}`}
                      style={{ width: "25%" }}
                    ></span>
                  </span>
                  <span className="text-sm"> 25k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 my-2 gap-6">
        <div className="bg-white p-4 border rounded-lg shadow-md flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <h4 className="text-4xl font-bold">$12.9k</h4>
            <div>
              <strong className="text-sm">Target</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">31.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#D4D5D6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="bg-white p-4 border rounded-lg shadow-md flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <h4 className="text-4xl font-bold">$3.6k</h4>
            <div>
              <strong className="text-sm">Earnings</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">51.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            role="img"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="dolarIconTitle"
            stroke="#D4D5D6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title id="dolarIconTitle">Dolar</title>{" "}
              <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="bg-white p-4 border rounded-lg shadow-md flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <h4 className="text-4xl font-bold">8.3k</h4>
            <div>
              <strong className="text-sm">Visits</strong>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">3.5%</p>
                <svg
                  fill="#00BCC2"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.01 512.01"
                  xmlSpace="preserve"
                  className="cursor-pointer"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#D4D5D6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="#D4D5D6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Overview;
