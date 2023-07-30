import React, {useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import axios from 'axios'




const Parcours=()=>{
  const token=localStorage.getItem('token')

  const [data,setData]=useState([])
  const url='http://127.0.0.1:8000/'

  const GetParcProf=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    let resultat;
    axios.get(url+'parcoursprof/',config)
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {
      alert(e)
    });
  }
  useEffect(()=>{
    GetParcProf();
  },[])





  
  
  return (

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Poste (s) occupé (s) / organismes ou Structures</TableCell>
              <TableCell >Date Deb</TableCell>
              <TableCell >Date Fin</TableCell>
              <TableCell >Principaux travaux réalisés&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{row.Poste_occup}</TableCell>
                <TableCell >{row.date_deb}</TableCell>
                <TableCell >{row.date_fin}</TableCell>
                <TableCell >{row.Travaux_realises}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    
  );
}




export default Parcours;




