import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

class Header extends React.Component{
    const [value, setValue] = React.useState('one');
    render(){
        
        const handleChange = (event, newValue) => {
            setValue(newValue);
       
        return(
            <Box sx={{ width: '100%' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    >
                    <Tab value="one" label="About" />
                    <Tab value="two" label="Experience" />
                    <Tab value="three" label="Projects" />
                    <Tab value="four" label="Contact" />
                </Tabs> 
            </Box>
        );
         };
    };
}
export default Header;