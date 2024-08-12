/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import {Projects} from "./Projects";
import {Tasks} from "./Tasks";
import {Team} from "./Team";

export const DisplayArea = ({tab}) => {
  return (
    <div>
    {tab=='Projects'&&<Projects />}
    {tab=='Tasks'&&<Tasks />}
    {tab=='Team'&&<Team />}
    </div>
  );
};
