import React from 'react'
import { useParams } from 'react-router-dom'
import { productData} from './data';
import { Box, Stack, Typography } from '@mui/material';


function product() {
    const {id}= useParams();
    const filterData = productData.filter((e,i)=>e.id == id);

  return (
    <>
    {filterData.map((e,i)=>{
        return(
            <Stack m={"0 auto"}  key={i}  flexDirection={'row'} >
                <Box width={"90%"} maxWidth={"70%"}>
                <img src={e.image} alt="" width={"100%"} style={{maxWidth:400,}} />
                </Box>

                <Box py={10}>
                <Typography mb={4} fontWeight={600}>{e.title}</Typography>
                <Typography width={{md:"70%",xs:"100%"}} mb={4}>{e.description}</Typography>
                <Typography width={{md:"70%",xs:"100%"}} fontWeight={700}>${e.price}</Typography>
                </Box>
            </Stack>
        )
    })}
    </>
  )
}

export default product