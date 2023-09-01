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
        <Box sx={{ width: '100%' }}  >
            <Tabs id="header" 
                value={value} 
                onChange={handleChange}
                textColor="secondary"
                aria-label="secondary tabs example"
                
            >
                <a href="#about"><Tab value={0} label="About"/></a>
                <a href="#experience"><Tab value={1} label="Experience" /></a>
                <a href="#projects"><Tab  value={2} label="Projects" /></a>
                <a href="#contact"><Tab  value={3} label="Contact" /></a>
            </Tabs> 
        </Box>
    );
}

export default Header;