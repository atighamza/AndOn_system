import React from 'react'
import { Box, Typography } from "@mui/material";


interface Props {
    name : string
}

const ServiceItem = ({name} : Props) => {
  return (
    <Box
    sx={{
   
      height: 400,
      border: "3px solid #3D8E7D",
      borderRadius: 3,
      p: 2,
    }}
  >
    <Typography
      sx={{
        bgcolor: "#EBF6F2",
        color: "#3D8E7D",
        textAlign: "center",
        fontWeight: "bold",
      }}
      variant="h4"
    >
        {name}
    </Typography>

    <Typography sx={{ textAlign: "center", mt: 5 }} variant="h5">
      Nombre d'appels: 20
    </Typography>

    <Box
      sx={{
        height: 170,
        width: 170,
        mx: "auto",
        mt: 5,
        p: 1,
        borderRadius: "50%",
        border: "2px dashed #3D8E7D ",
      }}
    >
      <Box
        sx={{
          bgcolor: "#3D8E7D",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={30}>0:19</Typography>
        <Typography fontSize={20}>Hrs:Mins</Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default ServiceItem