import React from 'react'
import Cards from './Cards'
import {productData} from './data'
import { Box, Grid } from '@mui/material'

function Home() {
  return (
    <>
      <Grid container rowGap={2}>
    {productData.map((e,i)=>{
        return(
          <Grid item lg={3} px={1}>
            <Cards key={i} title={e.title} des={e.description} img={e.image} id={e.id} />
          </Grid>
          )
        })}
        </Grid>
    </>
  )
}

export default Home