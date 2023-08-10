import React,{useState,useEffect,useMemo} from 'react'
import BasicCard from './Cards'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CreateNewAccountModal from './CreateNewAccountModal';
import axios from 'axios'
const Home=()=>{
  const url='http://127.0.0.1:8000/'
  const [offers,setOffers]=useState([])
  const token=localStorage.getItem('token')
  console.log(token)
 


  const getOffers=()=>{
  
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'OffreEmp/',config)
      .then((res) => {
      const data = res.data
      setOffers(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getOffers()
  },[])
  const searchOffre=(e)=>{
    const searchString = 'li'; // Replace this with the characters or substring you want to filter by.
    const filteredOffers = offers.filter(offer => offer.TitreOffre.toLowerCase().includes(searchString.toLowerCase()));
    // setData(filteredOffers)
  }
  const Offers=offers.map((offer,index)=>{
    return(
      <Grid key={index} item xs={4}>
        <BasicCard Diraction={offer.Id_struc} file={offer.Description} getOffers={getOffers}Departement={offer.Id_dep} PostFilier={offer.TitreOffre} nbrPost={offer.NombrePoste} id={offer.id}/>
      </Grid>
      )
    })
  const [createModalOpen,setCreateModalOpen]=useState(false)
  const handleClick=()=>{
  	setCreateModalOpen(true)
  }

  const columns = useMemo(
    () => [
       {
        id: 'id', //id required if you use accessorFn instead of accessorKey
        header: 'id',
        },
      {
        id: 'TitreOffre', //id required if you use accessorFn instead of accessorKey
        header: 'Titre d\'Offre',
      },
      {
        id: 'NombrePoste', //id required if you use accessorFn instead of accessorKey
        header: 'Numéro des post Disponible',
        
      },
      {
        id: 'Id_struc', //id required if you use accessorFn instead of accessorKey
        header: 'Deraction',
      },
      {
        id: 'Id_dep', //id required if you use accessorFn instead of accessorKey
        header: 'Departement',
        
      },
      {
        id: 'Description', //id required if you use accessorFn instead of accessorKey
        header: 'Description',
      },
    ],
    [],
  );
  useEffect(() => {
    console.log(offers); // This will log the updated offers whenever it changes.
  }, [offers]);

  const handleSubmit=(values)=>{
    console.log('----------------------')
    setOffers([...offers,values])
  }
  return(
    <Stack spacing={1}>
	  	<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
	       <Button
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={handleClick}
            >
              Ajouter Offre
            </Button>
	      </div>
	  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
	    {Offers}
	  </Grid>

		<CreateNewAccountModal
      open={createModalOpen}
    	onClose={() => setCreateModalOpen(false)}
	    setData={(values)=>handleSubmit(values)}
    />

    

	</Stack>
  )
}
export default Home