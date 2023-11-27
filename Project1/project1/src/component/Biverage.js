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
      <h1><b style={{color:"green"}}>BIVERAGE</b></h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/40316087_1-nutrela-maxx-nuts-walnut-kernels.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Nutrela</b>
           <p>Maxx Nuts Walnut Kernels</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/20002445_2-haldirams-namkeen-tasty-nuts.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Haldiram's</b>
           <p>Namkeen - Tasty Nuts</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250 ,width: 200}} image="https://www.bigbasket.com/media/uploads/p/m/40316089_1-nutrela-maxx-nuts-cashew.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Nutrela</b>
           <p>NutrelaMaxx Nuts Cashew</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250}} image="https://www.bigbasket.com/media/uploads/p/m/40137468_4-cornitos-nut-mixture-crunchy-party-snack.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Cornitos</b>
           <p>Party Mix - Salted Peanuts, Corn Nuts & Coated Green</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1204027_1-haldirams-namkeen-tasty-nuts.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Haldiram's</b>
           <p>Namkeen - Tasty Nuts</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/20005273_5-tong-garden-party-snack.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Tong Garden</b>
           <p>Party Snack</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/30012173_10-yoga-bar-multigrain-energy-bar-nuts-n-seed.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Yoga Bar</b>
           <p>Multigrain Energy Bar - Nuts & Seeds, Healthy</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40316090_1-nutrela-maxx-nuts-pistachio-premium-roasted-salted.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Nutrela</b>
           <p>Maxx Nuts Pistachio Premium - Roasted &</p>
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
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40112510_4-bb-royal-brazilian-nuts.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>BB Royal</b>
           <p>Brazilian Nuts</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40076834_6-fresho-signature-dry-fruits-nuts.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fresho Signature</b>
           <p>Fruits & Nuts</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40316088_1-nutrela-maxx-nuts-almond.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Nutrela</b>
           <p>Maxx Nuts Almond</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40216054_2-open-secret-nutty-nuts-tandoori-masala-mix-roasted-power-snack-prebiotics-probiotics-fibre.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fresho Signature</b>
           <p>Fruits, Nuts & Berries - Vegan</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40004475_5-bisk-farm-mast-jeera-the-spicy-jeera-biscuits.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Cornitos</b>
           <p>Party Mix - Salted Peanuts, Corn Nuts & Coated Green</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40112530_6-bb-royal-macadamia-nuts.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Open Secret</b>
           <p>Nutty Nut Dry Fruit Mix - Tandoori Masala, Rich In</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40189464_8-true-elements-7-in-1-super-seeds-nut-mix.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Bisk Farm</b>
           <p>Mast Jeera - The Spicy Jeera Biscuits</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40231856_3-happilo-100-natural-premium-whole-cashews-value-pack.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>BB Royal</b>
           <p>Macadamia Nuts</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
    </div>
  );
}