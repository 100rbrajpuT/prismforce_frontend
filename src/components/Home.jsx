import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from './Table';

const Home = () => {
   
  return (
    <div>
        <h2>Balance sheet</h2>
        <Table/>
    
    </div>
  )
}

export default Home
