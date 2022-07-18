import React from "react";
import '../App.css';
import {TextField, Button, FormControlLabel, Checkbox} from '@mui/material';



function Reg(){
    const textfield={
        margin : "10px"
        
    }
    const btnstyle={
        margin: "10px"
    }
        
    return(
        
        <div className = "Reg">
            <body>
            <img src="https://www.newcastlede.gov/ImageRepository/Document?documentID=46217" width="300" height="200" />
            
            </body>
            <h1>
                Registration
            </h1>
            <TextField label="First Name" placeholder="" ></TextField>
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
             label = "Remember me"
             />
             <Button
             type="submit"
            color="secondary"
            variant="contained"
            >
                Next
             </Button>
            
        </div>
    )
    }
export default Reg;