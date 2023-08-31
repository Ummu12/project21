import React,{useState} from "react";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material";

export const Fullname=()=>{
    const[fname,setFnum]=useState("");
    const[snum,setSnum]=useState("");
    const[tnum,setTnum]=useState("");
    const[result,setResult]=useState("");

    return(
       <Grid container spacing={2}>
       <Grid item xs={2}>
       </Grid>

        <Grid item xs={2}>
         <TextField  onChange={(e)=>setFnum(e.target.value)}
         variant="outlined" label="First Name" fullWidth/>
        </Grid>
  
        <Grid item xs={2}>
         <TextField onChange={(e)=>setSnum(e.target.value)}
          variant="outlined" label="Middle Name" fullWidth/>
        </Grid>

        <Grid item xs={2}>
         <TextField  onChange={(e)=>setTnum(e.target.value)} 
         variant="outlined" label="Last Name" fullWidth/>
        </Grid>
       
         <Grid item xs={2}>
            <Button onClick={()=>setResult(`${fname} ${snum} ${tnum}`)}
            variant="contained" fullWidth sx={{height:55}}>
             Add
            </Button>
         </Grid>
            
             <Grid item xs={4}>
             </Grid>

             <Grid item xs={4}>
                <Card sx={{bgcolor:"lightcyan"}}>
                    <CardContent>
                        <h1 style={{textAlign:"center"}}>
                           {result}
                        </h1>
                    </CardContent>
                </Card>
             </Grid>

             <Grid item xs={4}>
             </Grid>

       </Grid>

    )
}

