import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({title,des,img,id}) {
    const navigate = useNavigate()
  return (
    <Card >
      <CardMedia
        sx={{ height: 200 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom lineHeight={1} component="div">
          {title.slice(0,40)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {des.slice(0,130)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate(`/Product/${id}`)}>add</Button>

      </CardActions>
    </Card>
  );
}