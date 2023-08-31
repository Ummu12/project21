import React from "react";
import { Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";


 export const Nav=()=>{
    return(
      <Grid container spacing={3} sx={{marginBottom:3,bgcolor:"lightcyan",height:100,}}>
        <Grid item xs={3}>
        <Link to="/">
          <Button variant="contained" fullWidth>
            Home
          </Button>
        </Link>
        </Grid>
    
        <Grid item xs={3}>
        <Link to="/Addition">
          <Button variant="contained" fullWidth>
            Addition
          </Button>
        </Link>
        </Grid>

        <Grid item xs={3}>
        <Link to="/Fullname">
          <Button variant="contained" fullWidth>
            Fullname
          </Button>
        </Link>
        </Grid>



      </Grid>
    )
}