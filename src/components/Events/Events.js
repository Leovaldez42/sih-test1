import { Grid } from '@mui/material'
import React from 'react'
import EventCard from './EventCard'
import {Eventdata} from './EventData';

export default function Events() {

  const events = Eventdata.map(event => {
    return <EventCard id={event.id} title={event.title} date={event.date} location={event.location} />
  })
  return (
    <div>
      <Grid alignItems="flex-start" container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          {events}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard />
        </Grid>
      </Grid>
    </div>
  )
}
