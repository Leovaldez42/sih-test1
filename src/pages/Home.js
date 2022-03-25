import { Grid } from '@mui/material'
import React from 'react'
import Events from '../components/Events/Events'
import Filter from '../components/Filters/Filter'

export default function Home() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6} md={4}>
        <Filter />
      </Grid>
    
      <Grid item xs={6} md={8}>
        <Events />
      </Grid>
    </Grid>
  )
}
