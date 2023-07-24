import React from 'react'
import BasicCard from './Cards'
const Home=()=>{
    return(
        <div>
            <BasicCard Diraction={'Juridique'} Departement={'Contentieux'} PostFilier={'Cadre chargé du contentieux '} nbrPost={'5'}/>
            <br/>
            <BasicCard Diraction={'Finances'} Departement={'Tresorerie'} PostFilier={'ingénieur statisticien'} nbrPost={'8'}/>
          
        </div>
    )
}
export default Home