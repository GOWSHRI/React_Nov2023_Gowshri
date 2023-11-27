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
      <h1><b style={{color:"green"}}>BEAUTY</b></h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/100968_5-mysore-sandal-bathing-soap-superior-with-pure-sandalwood-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Mysore Sandal</b>
           <p>Superior Sandalwood Oil Soap</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/1212913_1-palmolive-handwash-sea-minerals-liquid-refill-750-ml-naturals-sea-mineral-250-ml.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Palmolive</b>
           <p>Handwash - Sea Minerals Liquid Refill 750 ml +</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250 ,width: 200}} image="https://www.bigbasket.com/media/uploads/p/m/40158282_11-dove-cream-beauty-bathing-bar.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Dove</b>
           <p>Cream Beauty Bathing Bar, Has 1/4th Moisturizing</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250}} image="https://www.bigbasket.com/media/uploads/p/m/40194528_14-dettol-intense-cool-bathing-soap-bar-with-menthol-provides-germ-protection.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Dettol</b>
           <p>Intense Cool 2X Menthol Soap, Protects from Body</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40139092_8-chandrika-ayurvedic-soap.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Chandrika</b>
           <p>Ayurvedic Soap</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1206314_5-lifebuoy-total-10-soap-bar.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Lifebuoy</b>
           <p>Total 10 Soap Bar</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/273811_13-santoor-sandal-turmeric-soap.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Santoor</b>
           <p>Sandal & Turmeric BathÂ Soap for Younger</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40242272_1-dove-deep-moisture-body-wash-nutrium-moisture-100-gentle-cleanser.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Dove</b>
           <p>Deep Moisture Body Wash - Nutrium Moisture, 100%</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40195279_5-sunsilk-stunning-black-shine-shampoo-with-amla-oil-pearl-protein-vitamin-e-for-long-lasting-shine.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Sunsilk</b>
           <p>Stunning Black Shine Shampoo - With Amla + Oil,</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40008459_3-meera-hairwash-powder-herbal.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Meera</b>
           <p>Herbal Powder - 7 Natural Herbs</p>
         </CardContent>
         <TextField
            placeholder="1 pc - (Approx. 250g-500g)"
          />
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40141851_7-dove-intense-repair-shampoo.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Dove</b>
           <p>Intense Repair Shampoo</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/100185312_15-loreal-paris-excellence-creme-hair-colour.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Loreal Paris</b>
           <p>Excellence Creme Hair Colour</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40194115_3-indulekha-bringha-oil.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Indulekha</b>
           <p>Bringha Oil - Reduce Hair Fall & Grow New Hair, 100%</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/100016958_8-godrej-nupur-hair-colour-solution-100-pure-henna-mehendi-natural-conditioning-anti-dandruff.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Godrej Nupur</b>
           <p>Hair Colour Solution - 100% Pure Henna Mehendi,</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1214134_1-mamaearth-onion-shampoo-for-hair-growth-hair-fall-control-onion-oil-plant-keratin.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Mamaearth</b>
           <p>Onion Shampoo For Hair Growth & Hair Fall Control </p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40226990_1-toppik-hair-building-fibres-full-hair-instantly-dark-brown.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Toppik</b>
           <p>Hair Building Fibres - Full Hair Instantly, Dark Brown</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1222203_1-colorbar-nail-polish-remover-classic.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>ColorBar</b>
           <p>Nail Polish Remover - Classic</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/100355993_9-himalaya-kajal.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Himalaya</b>
           <p>Kajal</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40202951_1-elle-18-nail-pops-nail-color.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Elle 18</b>
           <p>Nail Pops Nail Colour</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/30005592_2-white-tone-pearl-face-powder.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>White Tone</b>
           <p>Pearl Face Powder</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1208621_2-maybelline-new-york-colossal-kajal.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Maybelline New York</b>
           <p>Colossal Kajal</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1207868_4-lakme-nail-colour-remover.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Lakme</b>
           <p>Nail Colour Remover</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/30004013_10-maybelline-new-york-baby-lips-lip-balm.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Maybelline New York</b>
           <p>Baby Lips Lip Balm </p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40286834_1-lakme-face-it-compact-lightweight-smooth-finish.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Lakme</b>
           <p>Face It Compact - Lightweight, Smooth Finish</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
    </div>
  );
}