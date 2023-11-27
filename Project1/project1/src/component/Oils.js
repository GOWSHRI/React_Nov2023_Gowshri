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
      <h1><b style={{color:"green"}}>OILS</b></h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/40193091_1-nature-way-100-natural-pure-groundnut-oil-unrefined-cold-pressed.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Nature Way</b>
           <p>100% Natural & Pure Groundnut Oil - Unrefined,</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/40114612_2-mr-gold-coconut-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Mr. Gold</b>
           <p>Coconut Oil</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250 ,width: 200}} image="https://www.bigbasket.com/media/uploads/p/m/40141901_3-klf-coconad-pure-coconut-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Kpl Shudhi</b>
           <p>Coconut Oil</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250}} image="https://www.bigbasket.com/media/uploads/p/m/40170446_6-nature-way-100-natural-pure-coconut-oil-unrefined.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Klf</b>
           <p>Coconad - Pure Coconut Oil</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/144159_2-klf-oil-pure-coconut.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Klf</b>
           <p>Oil - Pure Coconut</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40313872_1-auric-cow-ghee.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Auric</b>
           <p>Bilona Cow Ghee - 100% Pure & Natural Desi Ghee</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40313874_1-auric-cow-ghee-100-pure.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Auric</b>
           <p>Cow Ghee Original - 100% Pure & Natural</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40048254_13-aashirvaad-svasti-cow-ghee.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Aashirvaad Svasti</b>
           <p>Cow Ghee/Tuppa</p>
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
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/147491_9-saffola-gold-refined-cooking-oil-blended-rice-bran-sunflower-oil-helps-keeps-heart-healthy.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Saffola</b>
           <p>Gold Refined Cooking oil | Blended Rice Bran &</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1204971_2-oleev-active-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Oleev</b>
           <p>Active Oil</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40239287_2-fortune-xpert-total-balance-oil-blend-of-rice-bran-soyabean-flaxseeds-rich-in-omega-3.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Fortune</b>
           <p>Xpert - Total Balance Oil, Blend Of Rice Bran,</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 500}}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1204625_1-sundrop-oil-heart-pouch.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Sundrop</b>
           <p>Oil - Heart Pouch</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 500 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40046698_3-gulab-refined-cotton-seed-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Gulab</b>
           <p>Refined Cotton Seed Oil</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 500 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40200695_1-janmay-cottonseed-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Janmay</b>
           <p>Cottonseed Oil</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40080947_5-fortune-cotton-seed-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>BB Royal</b>
           <p>Cotton Lite Refined Cottonseed</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
    </div>
  );
}