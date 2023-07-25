import React,{useState} from 'react';
import BasicCard from './Cards'


const OffreDetail=()=> {
  return (
    <div>
      <BasicCard offre={true} Diraction={'Juridique'} Departement={'Contentieux'} PostFilier={'Cadre chargé du contentieux '} nbrPost={'5'}/>
    </div>
  );
}

export default OffreDetail