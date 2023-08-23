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
        <Box sx={{ width: '100%' }}>
            <Tabs 
                value={value} 
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value={0} label="About" />
                <Tab value={1} label="Experience" />
                <Tab value={2} label="Projects" />
                <Tab value={3} label="Contact" />
            </Tabs> 
        </Box>
    );
}

export default Header;