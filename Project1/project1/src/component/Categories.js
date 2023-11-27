import React from "react"
import {Box, Stack,Typography,styled} from "@mui/material"
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
const Categories=()=>{
    return(
        <Box>
           
            <br></br>
            <h2 style={{textAlign:"center"}}>Shop by</h2>
            <h1 style={{fontFamily:"sans-serif",textAlign:"center"}}>Categories</h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://horticulture.co.uk/wp-content/uploads/2021/11/fruittypes-header-1600x640.jpg)"}}><StyledTypography align="center" variant="h5">FRUITS</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://www.nutritionadvance.com/wp-content/uploads/2020/02/different-types-of-nuts-on-a-wooden-surface-twit.jpg)"}}><StyledTypography align="center" variant="h5">NUTS</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/lean-meats.jpg?quality=82&strip=all)"}}><StyledTypography align="center" variant="h5">MEATS</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKS8YqbueQ1Ip25Nagsd0dGzQlcZULIVRB1JjLxLiZA&s)"}}><StyledTypography align="center" variant="h5">OILS AND GRAINS</StyledTypography></StyledBox>

            </Stack>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://www.smart-online.in/image/cache/catalog/catimage/Beauty-270x270.jpg)"}}><StyledTypography align="center" variant="h5">BEAUTY</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEg6mWcgnh3T9x-YYDdeX0EJZDHlID9EyyQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">KITCHEN PRODUCTS</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMav7569fVuSqQMfGqS3qEF7Zv5kxyfUh0eQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">BABY PRODUCTS</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wgqOaf0--csgtdPVvL4kuJtfl9I_F_2pRw&usqp=CAU)"}}><StyledTypography align="center" variant="h5">SNACKS</StyledTypography></StyledBox>

            </Stack>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lzbnjA7_QUuNOEaoStyHPhD_kRgATrlEUQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">BREADS AND DIARY</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEBP0LUIkXklhAkjkBt6su3qJGesaXqxOGg&usqp=CAU)"}}><StyledTypography align="center" variant="h5">SNACKS</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7q5zYmlaLx7nEGKQXCww0BSeBK7kKm1rpHA&usqp=CAU )"}}><StyledTypography align="center" variant="h5">BIVERAGE</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlamI1rjUF0KhIv0pk8LDoif71EZHuuS0Rg&usqp=CAU)"}}><StyledTypography align="center" variant="h5">PETS PRODUCTS</StyledTypography></StyledBox>

            </Stack>
           
            <h2>Shop by</h2>
            <h1 style={{fontFamily:"sans-serif"}}>AGE</h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpKcltgSR8Ve_JgZ8KMadWX4N4eAveTcRjA&usqp=CAU)"}}><StyledTypography align="center" variant="h5">20% OFFER</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_VxEYA5ywbsXigfTfaLzDCepZiUGs2kvd4DuB-kECQI7DANIafm_k0oeFMAPGUqpUaM&usqp=CAU)"}}><StyledTypography align="center" variant="h5">10% OFFER</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://images.immediate.co.uk/production/volatile/sites/30/2020/04/SlowCookerBread-cf975ee.jpg?quality=90&resize=556,505)"}}><StyledTypography align="center" variant="h5">5% OFFER</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c4mzTsqYoLWHNziM4mHQEEp6-qCek6H7bQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">1Kg ONLY Rs:40</StyledTypography></StyledBox>
            
            </Stack>
            <br></br>
            <br></br>
            <h2>Daily</h2>
            <h1 style={{fontFamily:"sans-serif"}}>FLASH DEALS</h1>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:5,sm:6,md:8}} mt={4}>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaD2sH4FdCPiOoV2z2ZxZhKJU6oL3-V5BOjg&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Fresho- Organic chilli</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTRZFlYqY17tqJe8Z7pgrELc5Uo_j1QY-CQ&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Fresho-Ginger</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqCRxRlnmPVOcH850BAs18QivDvKBWPmMsA&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Organic Amla</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDtmJrjzZvycX0hhLZNZle3z6Kdp_UoL1w&usqp=CAU)"}}><StyledTypography align="center" variant="h5">Fresho-Papaya</StyledTypography></StyledBox>
            </Stack>
            <br></br>
        </Box>
    )
};
export default Categories