import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Divider, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import { format, isFuture } from "date-fns";

export default function EventCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MLc0-6HswDk3V4dAabFgggHaE8%26pid%3DApi&f=1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Lizard
          </Typography>

          {/* This shall be description */}
        <Typography variant="body2" color="textSecondary" component="p">
          	<EventIcon style={{color: "#52b107"}} />
			  Mumbai
        </Typography>
          
        <Typography variant="body2" color="textSecondary" component="p">
            <RoomOutlinedIcon style={{ color: "#52b107" }} />
			Amravati
        </Typography>
		<Divider variant="middle" />
            <Button variant="contained">Register</Button>
    	</CardContent>
      </CardActionArea>
    </Card>
  );
}
