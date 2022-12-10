import React, { useEffect, useState } from 'react';
import axios from "axios";

const Table = () => {

    const [rev, setRev]= useState([])
    const [exp, setExp] = useState({})
    const [bal, setBal] =useState([])
    let balance = []
 

    const getRevenue =()=>{
        //https://prismforce-production-b3fe.up.railway.app/revanue
        axios.get("http://localhost:8090/revenueData")
        .then((res)=>{
            setRev(res.data)
        })
    }
    

    const getExpance =()=>{
        ////https://prismforce-production-b3fe.up.railway.app/expense
        axios.get("http://localhost:8090/expenseData")
        .then((res)=>{
            setExp(res.data)
        })
    }

    const getBalance =()=>{
        //https://prismforce-production-b3fe.up.railway.app/balance
        axios.get("http://localhost:8090/balance")
        .then((res)=>{
            setBal(res.data)
        })
    }
    useEffect(()=>{
         getRevenue();
         getExpance(); 
         getBalance();
    },[])
    console.log("revenue",rev)
     console.log("expense",exp)
     console.log("balance",bal)
  return (
    <div style={{display:"flex", justifyContent:"center"}}>

     <table style={{border:"2px solid black"}}>
        <tr>
          <th>Revenue</th>
        </tr>
        {
           rev && rev.map((e, index)=>{
            return(
                <tr key={index}>
                   <td>{e.amount}</td>
               </tr>  
            )
           }) 
        }       
      </table>
      <table style={{border:"2px solid black"}}>
        <tr>
          <th>Expance</th>
        </tr>
        {
           exp.length>0 && exp.map((e, index)=>{
            return(
                <tr key={index}>
                   <td>{e.amount}</td>
               </tr>  
            )
           }) 
        }       
      </table>
      <table style={{border:"2px solid black"}}>
        <tr>
          <th>Balance</th>
        </tr>
        {
           bal && bal.map((e, index)=>{
            return(
                <tr key={index}>
                   <td>{e.amount}</td>
               </tr>  
            )
           }) 
        }       
      </table>


       
    </div>
  )
}

export default Table
