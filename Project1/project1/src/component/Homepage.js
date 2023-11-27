import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material/";
import { Link as RouterLink } from 'react-router-dom';
const Homepage = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  
  const StyledBox=styled(Box)({
    height:200,
    width:"100%",
    cursor:"pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"
});
const StyledTypography=styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"white",
    opacity:"0.8"
})
const SocialBox1= styled(Box)({
  display:"flex",
  gap: 10,
  color:'white'
});
  const MenuItems = [
    { Name: <b>Home</b>, Link: "/" },
    { Name: <b>Fruits </b>, Link: "#" },
    { Name: <b>Bakery and Diary</b>, Link: "#" },
    { Name: <b>Beauty and Hygine</b>, Link: "#" },
    { Name: <b>Meats</b>, Link: "#" },
    { Name: <b>Household</b>, Link: "#" },
    { Name: <b><StyledTypography component={RouterLink} to="/ab">About Us</StyledTypography></b>, Link: "#" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <div>
    <AppBar sx={{ background: "green" }} position={"static"}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{display: { xs:"none",sm:"none",md:"flex"}}}>
          {MenuItems.map((item)=> (
            <Typography
            sx={{
              cursor:"pointer",
              fontSize:"14px",
            }}
            >
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search ..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
    </div> 
    <div>
    <Box>
            <Typography align="center" variant="h3" sx={{fontWeight:900}}>
                GOODS<b style={{color:"red"}}> N </b>GRAINS
            </Typography>
            <Typography align="center" variant="body2" sx={{fontWeight:100}}>
                <b style={{color:"green"}}>The right store with right price</b>
            </Typography>
            <Box 
            sx={{
                backgroundImage:'url(https://img.freepik.com/free-photo/food-photography-different-fruits-vegetables-white-wooden-table-surface_1150-42603.jpg)',
                backgroundRepeat:'no-repeat',
                backgroundColor:"black",
                backgroundPosition:"center",
                backgroundSize:"cover", 
                height:500,
                width:"100%",
            }}
        >
            <Box>
                <Typography varient={"h6"} color='tomato' align="center" pt={8}>
                We’re your go-to place for good value treats.
                </Typography>
                <Typography varient="h4" align="center" >
                Make delicious creations. Shop with us!
                </Typography>
                
            </Box>
        </Box>
        </Box>
    </div>
    <div>
    <Box>
           
           <br></br>
           <h1 style={{textAlign:"center"}}>Shop by</h1>
           <h1 style={{fontFamily:"sans-serif",textAlign:"center",color:"green"}}>Categories</h1>
           <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
               <StyledBox sx={{backgroundImage:"url(https://horticulture.co.uk/wp-content/uploads/2021/11/fruittypes-header-1600x640.jpg)"}} component={RouterLink} to="/f"><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://www.nutritionadvance.com/wp-content/uploads/2020/02/different-types-of-nuts-on-a-wooden-surface-twit.jpg)"}} component={RouterLink} to="/nu"><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/lean-meats.jpg?quality=82&strip=all)"}} component={RouterLink} to="/mo"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKS8YqbueQ1Ip25Nagsd0dGzQlcZULIVRB1JjLxLiZA&s)"}} component={RouterLink} to="/oi"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>

           </Stack>
           <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
               <StyledBox sx={{backgroundImage:"url(https://www.smart-online.in/image/cache/catalog/catimage/Beauty-270x270.jpg)"}}  component={RouterLink} to="/be"><StyledTypography align="center" variant="h5"></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEg6mWcgnh3T9x-YYDdeX0EJZDHlID9EyyQ&usqp=CAU)"}} component={RouterLink} to="/kp"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMav7569fVuSqQMfGqS3qEF7Zv5kxyfUh0eQ&usqp=CAU)"}} component={RouterLink} to="/bp"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wgqOaf0--csgtdPVvL4kuJtfl9I_F_2pRw&usqp=CAU)"}} component={RouterLink} to="/sn"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>

           </Stack>
           <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqUNphLW_jN4BIOeLSFu6eYIDpwhuF1nuKyKd1RveKzVlHDLupIXOj3dnNbg4zXrbm-M&usqp=CAU)"}} component={RouterLink} to="/ba"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEBP0LUIkXklhAkjkBt6su3qJGesaXqxOGg&usqp=CAU)"}} component={RouterLink} to="/fs"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cUOY0cKCe7jrru5qdYgM1Ynv-JI75dFViQ&usqp=CAU )"}} component={RouterLink} to="/bi"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlamI1rjUF0KhIv0pk8LDoif71EZHuuS0Rg&usqp=CAU)"}} component={RouterLink} to="/pb"><StyledTypography align="center" variant="h5" ></StyledTypography></StyledBox>

           </Stack>
          
           <h2>A OFFER</h2>
           <h1 style={{fontFamily:"sans-serif",color:"red"}}>ONLY FOR 4 DAYS</h1>
           <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpKcltgSR8Ve_JgZ8KMadWX4N4eAveTcRjA&usqp=CAU)"}}><StyledTypography align="center" variant="h5">20% OFFER</StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_VxEYA5ywbsXigfTfaLzDCepZiUGs2kvd4DuB-kECQI7DANIafm_k0oeFMAPGUqpUaM&usqp=CAU)"}}><StyledTypography align="center" variant="h5">24% OFFER</StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://images.immediate.co.uk/production/volatile/sites/30/2020/04/SlowCookerBread-cf975ee.jpg?quality=90&resize=556,505)"}}><StyledTypography align="center" variant="h5">5% OFFER</StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c4mzTsqYoLWHNziM4mHQEEp6-qCek6H7bQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">1Kg ONLY Rs:40</StyledTypography></StyledBox>
           
           </Stack>
           <br></br>
           <h2>A Step Towards</h2>
           <h1 style={{fontFamily:"sans-serif",color:"green"}}>ORGANIC LIFESTYLE</h1>
           <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:5,sm:6,md:8}} mt={4}>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaD2sH4FdCPiOoV2z2ZxZhKJU6oL3-V5BOjg&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Fresho- Organic chilli</StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTRZFlYqY17tqJe8Z7pgrELc5Uo_j1QY-CQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Fresho-Ginger</StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqCRxRlnmPVOcH850BAs18QivDvKBWPmMsA&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Organic Amla</StyledTypography></StyledBox>
               <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDtmJrjzZvycX0hhLZNZle3z6Kdp_UoL1w&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Fresho-Papaya</StyledTypography></StyledBox>
           </Stack>
           <br></br>
       </Box>
    </div>
    <div>
    <Box sx={{background:'black',height:'500px'}}>
    <Stack direction={{xs:'row',md:'row'}} p={7}>
        <Box flex={1}>
            
                <h3 style={{color:"green"}}>Goods N Grains</h3>
            <Typography color={'white'} align={'center'}>
                About Us
            </Typography>
            <Typography color={'white'} align={'center'}>
                Green Goods N Grains
            </Typography>
            <Typography color={'white'} align={'center'}>
                Privacy Policy
            </Typography>
            <Typography color={'white'} align={'center'}>
                Affiliate
            </Typography>
            <Typography color={'white'} align={'center'}>
                Terms and Conditions
            </Typography>
            <Typography color={'white'} align={'center'}>
                Careers At Goods N Grains
            </Typography>
            <br></br>
            <h3 style={{color:"green"}}>Popular Categories</h3>
            <Typography color={'white'} align={'center'}>
                Sunflower Oils
            </Typography>
            <Typography color={'white'} align={'center'}>
                Milk
            </Typography>
            <Typography color={'white'} align={'center'}>
                Organic F&V
            </Typography>
            <Typography color={'white'} align={'center'}>
                Floor Cleaners
            </Typography>
            <Typography color={'white'} align={'center'}>
                Frozen Veg Food
            </Typography>
        </Box>
        <Box flex={1}>
            
               <h3 style={{color:"green"}}>Help</h3> 
           
            <Typography color={'white'} align={'center'}>
                FAQs
            </Typography>
            <Typography color={'white'} align={'center'}>
                Contact Us
            </Typography>
            <Typography color={'white'} align={'center'}>
                GG Wallet FAQs
            </Typography>
            <Typography color={'white'} align={'center'}>
                GG Wallet FAQs
            </Typography>
            <Typography color={'white'} align={'center'}>
                Vendor Connect
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Typography color={'white'} align={'center'}>
                Wheet Atta
            </Typography>
            <Typography color={'white'} align={'center'}>
                Health Drinks
            </Typography>
            <Typography color={'white'} align={'center'}>
                Namkeen
            </Typography>
            <Typography color={'white'} align={'center'}>
                Other Juices
            </Typography>
            <Typography color={'white'} align={'center'}>
                Diaper & Wipes
            </Typography>
        </Box>
        <Box flex={1}>
            
                <h3 style={{color:"green"}}>Popular Brands</h3>
            
            <Typography color={'white'} align={'center'}>
                Amul
            </Typography>
            <Typography color={'white'} align={'center'}>
                RED BULL
            </Typography>
            <Typography color={'white'} align={'center'}>
                Yummiez
            </Typography>
            <Typography color={'white'} align={'center'}>
                Britannia
            </Typography>
            <Typography color={'white'} align={'center'}>
                Haldiram's
            </Typography>
            <Typography color={'white'} align={'center'}>
               Patanjali
            </Typography>
            <Typography color={'white'} align={'center'}>
                Cadbury Dairy Milk
            </Typography>
            <Typography color={'white'} align={'center'}>
                Nescafe
            </Typography>
            <Typography color={'white'} align={'center'}>
                elite cake
            </Typography>
            <Typography color={'white'} align={'center'}>
                Wow Momo
            </Typography>
            <Typography color={'white'} align={'center'}>
                Ferrero
            </Typography>
            <Typography color={'white'} align={'center'}>
               McCain
            </Typography>
            <Typography color={'white'} align={'center'}>
                Pedigree
            </Typography>
        </Box>
        <Box>
            <Typography color={'white'}  align={'left'}>
               <b style={{color:"green"}}> Follow Us</b>
            </Typography>
            <br></br>
            <SocialBox1>
            <Instagram />
            <Facebook />
            <Twitter />
        </SocialBox1>
        </Box>
    </Stack>
    </Box>
    </div>
    </div>
  );
};

export default Homepage;