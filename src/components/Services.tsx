import { Box, Grid, Typography } from "@mui/material";
import ServiceItem from "./ServiceItem";

const c1 = "#3D8E7D";
const c2 = "#EBF6F2";
const services = ['Maintenace' , 'Logistique' , 'Production' , 'Qualité']

const Services = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 10 }}>
        Le temps total : 2h
      </Typography>
      <Grid container spacing={4}>

  {services.map((item , index)=>(
       <Grid item xs={3} key={index}>
     <ServiceItem name ={item}/>
       </Grid>
   
  ))}
     
        </Grid>
    </Box>
  );
};

export default Services;
