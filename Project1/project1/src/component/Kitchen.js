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
      <h1><b style={{color:"green"}}>KITCHEN AND PETS</b></h1>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/40313950_2-bb-home-induction-bottom-stainless-steel-idli-cookercasserole-20-cm.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>BB Home</b>
           <p>Induction Bottom Stainless Steel Idli Cooker/Casserole</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200}} image="https://www.bigbasket.com/media/uploads/p/m/40252412_1-pedigree-adult-dry-dog-food-chicken-vegetables-balanced-nutrition-for-dogs-overall-health.jpg?tr=w-1920,q=https://www.bigbasket.com/media/uploads/p/m/40252412_1-pedigree-adult-dry-dog-food-chicken-vegetables-balanced-nutrition-for-dogs-overall-health.jpg?tr=w-1920,q=8080" />
         <CardContent>
          <b>Pedigree</b>
           <p>Adult Dry Dog Food - Chicken & Vegetables,</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250 ,width: 200}} image="https://www.bigbasket.com/media/uploads/p/m/40313932_1-bb-home-wooden-spatula-turner-set-30cm.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>BB Home</b>
           <p>Wooden Spatula & Turner Set - 30cm</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250}} image="https://www.bigbasket.com/media/uploads/p/m/70001924_15-pedigree-adult-gravy-doga-food-chicken-liver-chunks-in-gravy-25-rsa-off-value-pack.jpg?tr=w-1920,q=80" />
         <CardContent>
          <b>Pedigree</b>
           <p>Adult Gravy Dog Food - Chicken & Liver Chunks In</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40313931_2-bb-home-choppingcutting-board-bamboo-wood-23x33-cm.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>BB Home</b>
           <p>Chopping/Cutting Board - Bamboo Wood, 23x33 cm</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40133947_1-pedigree-dry-dog-food-pro-expert-nutrition-for-large-breed-puppy-3-24-months.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Pedigree</b>
           <p>Dry Dog Food - PRO, Expert Nutrition for Large</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40217991_1-purepet-cat-litter-super-absorbent-clumping-formula-for-multiple-cats-lavender.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Purepet</b>
           <p>Clumping Lavender Fragrance Cat Litter For</p>
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
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40021904_9-sheba-premium-cat-food-tuna-filets-whole-prawns-in-gravy.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>SHEBA</b>
           <p>luxe Pet Food - For Cats, Tuna Filets & Whole Prawns</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40222880_3-vinod-stainless-steel-pressure-cooker-induction-friendly-7-l.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Vinod</b>
           <p>Stainless Steel Outer Lid Pressure Cooker -</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40247593_1-prestige-deluxe-alpha-svachh-pressure-cooker-stainless-steel-induction-base.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Prestige</b>
           <p>Stainless Steel Outer Lid Pressure Cooker -</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40152214_6-prestige-omega-deluxe-granite-non-stick-byk-cookware-set-36316.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Prestige</b>
           <p>Deluxe Granite Non Stick Cookware Set - Kadai 24</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
      <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40197297_2-drools-adult-wet-dog-food-real-chicken-chicken-liver-chunks-in-gravy.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>DroolsReal</b>
           <p> Chicken & Chicken Liver Chunks In Gravy Dog</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40223444_1-dine-time-handmade-glass-snack-plattertray-dp6477.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Dine Time</b>
           <p>Handmade Glass Snack Platter/Tray - DP6477</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/1214644_1-philips-led-bulb-10-watt-cool-day-light-ace-saver-base-b22.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Philips</b>
           <p>LED Bulb - 10 Watt, Cool Day Light, Ace Saver Base</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250 }}>
         <CardMedia sx={{ height: 250,width:200 }} image="https://www.bigbasket.com/media/uploads/p/m/40122570_3-pedigree-pro-expert-nutrition-for-adult-small-breed-dogs-9-months-onward.jpg?tr=w-1920,q=80" />
         <CardContent>
         <b>Pedigree</b>
           <p>Pro - Expert Nutrition For Adult Small Breed Dogs, 9</p>
         </CardContent>
         <CardActions>
         <Button  fullWidth style={{backgroundColor:"white"} }>ADD</Button>
         </CardActions>
      </Card>
    </Stack>
    </div>
  );
}