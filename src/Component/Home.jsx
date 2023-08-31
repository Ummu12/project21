import React, { useState,useEffect } from "react";
import { Card,CardContent,Grid,TextField } from "@mui/material";

export  const Home=()=>{
const[age,setAge]=useState(0);
const[clr,setClr]=useState("you're not eligible to school");
 useEffect(()=>{
if(age>=3 && age<=5)
{setClr("you're eligible to Nursery School") }
else if(age>=6 && age<=10)
{setClr("you're eligible to Primary School")}
else if (age>=11 && age<=16)
{setClr("you're eligible to High School")}
else if (age>=17 && age<=20)
{setClr("you're eligible to Junior College")}
else if (age>=21 && age<=25)
{setClr("you're eligible to Senior College")}
else{
    setClr("you're not eligible to school")
}
 },[age])

return(
  
  <Grid container spacing={2}>
     <Grid item xs={12}>
 <TextField type="number" label="Enter your age" onChange={(e)=>setAge(e.target.value)} variant="outlined" fullWidth/>
     </Grid>


       <Grid item xs={12}>
        <Card sx={{
        color:"red",
        height:150,
            textAlign:"center",
             fontWeight:"bold",
   
        }}
        >
            <CardContent>
              <h1 sx={{fontWeight:"bold"}}>{clr}</h1>
            </CardContent>
        </Card>
       </Grid>


  </Grid>


)

}
