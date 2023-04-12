import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Body.module.css";

import BodyUp from './BodyCaresol/BodyUp';
import BodyDown from './BodyDown';

import React from 'react'

function Body() {
  return (
    <div>
      <BodyUp/>
      <BodyDown />
    </div>
  )
}





export default Body;
