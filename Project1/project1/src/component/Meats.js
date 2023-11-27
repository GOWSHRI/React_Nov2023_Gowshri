import * as React from 'react';
import TextField from "@mui/material/TextField";
import Rating from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack} from "@mui/material";

export default function Fruits() {
  return (
    <div >
      <h1><b style={{color:"green"}}>MEATS</b></h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:300}} image="https://www.bigbasket.com/media/uploads/p/m/40236777_1-fresho-raw-turkey-with-skin-curry-cut-tender-juicy.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fresho</b>
           <p>Raw Turkey With Skin - Curry Cut, Tender & Juicy</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400}} image="https://www.bigbasket.com/media/uploads/p/m/40236778_1-fresho-raw-turkey-with-skin-whole-tastier-juicy.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fresho</b>
           <p>Raw Turkey With Skin - Whole, Tastier & Juicy</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250 ,width: 400}} image="https://www.bigbasket.com/media/uploads/p/m/40236781_1-fresho-raw-quails-tender-juicy.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fresho</b>
           <p>Raw Quails - Tender & Juicy</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250}} image="https://www.bigbasket.com/media/uploads/p/m/40236780_1-fresho-raw-kadaknath-whole-with-skin-tender-juicy.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fresho</b>
           <p>Raw Kadaknath - Whole, With Skin, Tender & Juicy (Loose)</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:300 }} image="https://www.bigbasket.com/media/uploads/p/m/40197948_1-fresho-mutton-raw-lamb-rack.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fresho</b>
           <p>Mutton Raw Lamb Rack</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:300 }} image="https://www.bigbasket.com/media/uploads/p/m/40177465_7-zorabian-chicken-breast-boneless-raw-frozen.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fresho</b>
           <p>Chicken Breast - Boneless, Raw, Frozen</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:300 }} image="https://www.bigbasket.com/media/uploads/p/m/40236779_1-fresho-raw-kadaknath-with-skin-curry-cut-tender-juicy.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fresho</b>
           <p>Raw Kadaknath - With Skin, Curry Cut, Tender & Juicy</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:300 }} image="https://www.bigbasket.com/media/uploads/p/m/40195255_1-currymia-raw-freshly-frozen-mutton-cubes-bone-in.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Raw Freshly Frozen Mutton Cubes - Bone-In</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:300 }} image="https://www.bigbasket.com/media/uploads/p/m/40195256_1-currymia-raw-freshly-frozen-mutton-mince.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fresho</b>
           <p>Raw Freshly Frozen Mutton Mince</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
    </div>
  );
}