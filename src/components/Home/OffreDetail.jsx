import React,{useState,useEffect} from 'react';
import BasicCard from './Cards'
import axios from 'axios'
import { useParams } from "react-router-dom";

const OffreDetail=()=> {
  const token=localStorage.getItem('token')
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  
  const config = {
    headers: {
      'Authorization': `Token ${token}`,
    }
  }
  const { id } = useParams()
  const [offer,setOffer]=useState('')
  const getOffer=()=>{
    axios.get(url+'OffreEmp/'+id+'/',config)
      .then((res) => {
      const data = res.data
      setOffer(data)
    })
    .catch((e) => {
      console.log(e)
    });
  }
  useEffect(()=>{
    getOffer();
  },[])
  return (
    <div>
      <BasicCard offre={true} Diraction={offer.Id_struc} Departement={offer.Id_dep} PostFilier={offer.TitreOffre} nbrPost={offer.NombrePoste} id={offer.id}/>
    </div>
  );
}

export default OffreDetail