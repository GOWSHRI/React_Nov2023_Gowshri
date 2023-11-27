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
      <h1><b style={{color:"green"}}>FRUITS</b></h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400}} image="https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fressho</b>
           <p>Broccoli</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400}} image="https://www.bigbasket.com/media/uploads/p/m/20000911_31-fresho-kiwi-green.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fressho</b>
           <p>Kiwi - Green</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250 ,width: 400}} image="https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Fressho</b>
           <p>Mushrooms - Button</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250}} image="https://www.bigbasket.com/media/uploads/p/m/10000599_12-fresho-cucumber-english.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Freesho</b>
           <p>Cucumber - English (Loose)</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Dragon Fruit (Loose)</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/40004992_14-fresho-sweet-corn.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Sweet Corn (Loose)</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/1202322_1-fresho-pear-green-imported.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Pear - Green, Imported</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/30009284_8-fresho-avocado-imported-medium.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Avocado - Imported, Medium (Loose)</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/30009286_8-fresho-blueberry.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Blueberry</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Guava - Thai (Loose)</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/20001009_11-fresho-grapes-bangalore-blue.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Grapes - Bangalore Blue</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/10000350_19-fresho-custard-apple.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Custard Apple</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/10000133_14-fresho-lettuce-iceberg.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Lettuce - Iceberg</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Mini Orange Imported (Loose)</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/10000012_24-fresho-avocado.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Avocado</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:400 }} image="https://www.bigbasket.com/media/uploads/p/m/10000316_15-fresho-baby-potato.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Freesho</b>
           <p>Baby Potato (Loose)</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
    </div>
  );
}