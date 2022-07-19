import React from "react";
import '../App.css';
import {TextField, Button, FormControlLabel, Checkbox, Paper, Grid} from '@mui/material';



function Reg(){
    const btnstyle={
        margin: "10px",
        borderRadius: "100%"
    }
    const paperStyle={
        padding: "20px",
    }
        
    return(
        <div className = "Reg">
            <Grid align="center">
            <Paper Paper elevation={7}style={paperStyle}>
            
            <h1>
                Registration
            </h1>
            <TextField label="First Name" placeholder=""></TextField>
            <p></p>
            <TextField label="Last Name" placeholder="" ></TextField>
            <p></p>
            <TextField label="Email Adress" placeholder=""></TextField>
            <p></p>
            <TextField className="number" label="Phone Number" placeholder=""></TextField>
            <p></p>
            <TextField label="Password" placeholder="" type="password"></TextField>
            <p></p>
            <TextField label="Confirm Password" type="password"></TextField>
            <p></p>
            <div>
            <img src="https://th.bing.com/th/id/OIP.Ip8HLLLK7WwcEo2qP4f-QgHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="NCC2" width="300" height="200"/>
            <br></br>
            <img src="https://th.bing.com/th/id/OIP.u5qmxDb0AksJD2N-qm070wHaDf?w=341&h=165&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="NCC3" width="300" height="200"/>
            
            <img src="https://www.newcastlede.gov/ImageRepository/Document?documentID=46217" alt="NCC" width="300" height="200" />
            </div>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                >
                Donor
            </Button>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                >
               NCC Staff 
            </Button>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                >
                Case Manager
            </Button>
            <p></p>
            <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
             />}
             label = "Show Password"
             />
             <Button
             type="submit"
            color="inherit"
            variant="contained"
            >
                Next
             </Button>
             
             </Paper>
             </Grid>
             
        </div>
    )
    }
export default Reg;