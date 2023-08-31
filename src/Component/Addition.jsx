import React,{useState} from "react";
import { Card,CardContent,Grid,TextField,Button } from "@mui/material";

 export const Addition=()=>{
    const[fnum,setFnum]=useState(0);
    const[snum,setSnum]=useState(0);
    const[result,setResult]=useState(0);
    return(
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
 
        <Grid item xs={2}>
      <TextField label="Enter First Number" onChange={(e)=>setFnum(e.target.value)}
       variant="outlined" fullWidth/>      
        </Grid>

        <Grid item xs={2}>
      <TextField label="Enter Second Number" onChange={(e)=>setSnum(e.target.value)}  variant="outlined" fullWidth/>      
        </Grid>
        
    <Grid item xs={2}>
        <Button  onClick={()=>setResult(Number(fnum)+Number(snum))}
        variant="contained" fullWidth sx={{height:55}}>
            Add
        </Button>
        </Grid>

        <Grid item xs={2}>
        </Grid>

         
   <Grid xs={4}>
   </Grid>
     

      <Grid item xs={4}>
         <Card>
            <CardContent>
               <h1 style={{textAlign:"center"}}> {fnum}+{snum}={result}</h1>
            </CardContent>
         </Card>
         </Grid>

   




      </Grid>
    )
}