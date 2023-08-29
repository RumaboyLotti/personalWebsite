import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Header() {
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Box sx={{ width: '100%' }} style={{position: 'fixed'}} >
            <Tabs id="header" 
                value={value} 
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <a href="#about"><Tab value={0} label="About"/></a>
                <Tab value={1} label="Experience" />
                <Tab value={2} label="Projects" />
                <Tab value={3} label="Contact" />
            </Tabs> 
        </Box>
    );
}

export default Header;