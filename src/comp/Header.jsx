import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function Header({ country, setCountry, setCat, cat, query, setQuery }) {



    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar value={cat} sx={{mx: 25}}>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="general">General</Button>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="sport">Sport</Button>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="Business">Business</Button>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="Technology">Technology</Button>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="Science">Science</Button>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="Health">Health</Button>
                        <Button onClick={(e)=> setCat(e.target.value)}  color="inherit" value="Entertainment">Entertainment</Button>
                        
                    </Toolbar>
                </AppBar>
            </Box>


            <div className='header'>

                <Box>
                    <FormControl sx={{ mr: 5, ml: 5, minWidth: 120 }} >
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="Country"
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <MenuItem value="fr">France</MenuItem>
                            <MenuItem value="us">USA</MenuItem>
                            <MenuItem value="il">Israel</MenuItem>
                            <MenuItem value="de">Germany</MenuItem>
                            <MenuItem value="it">Italy</MenuItem>
                            <MenuItem value="ru">Russia</MenuItem>
                            <MenuItem value="be">Belgium</MenuItem>
                            <MenuItem value="ar">Argentina</MenuItem>
                            <MenuItem value="gb">United Kingdom</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* <Box>
                    <FormControl sx={{ mr: 5, ml: 5, minWidth: 120 }} >
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={cat}
                            label="Category"
                            onChange={(e) => setCat(e.target.value)}
                        >
                            <MenuItem value="general">General</MenuItem>
                            <MenuItem value="business">Business</MenuItem>
                            <MenuItem value="entertainment">Entertainment</MenuItem>
                            <MenuItem value="health">Health</MenuItem>
                            <MenuItem value="science">Science</MenuItem>
                            <MenuItem value="sports">Sports</MenuItem>
                            <MenuItem value="technology">Technology</MenuItem>
                        </Select>
                    </FormControl>
                </Box> */}

                <TextField id="outlined-basic" label="Search" variant="outlined" value={query} onChange={evt => setQuery(evt.target.value)} />
            </div>

        </div>
    )
}
