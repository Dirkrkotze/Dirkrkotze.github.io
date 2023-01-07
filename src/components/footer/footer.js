import React from "react";
import {Grid, Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import SocialIcon from "../home/SocialIcon";
//import useWindowDimensions from "../WindowDim"
import res from "../../img/Resume.pdf"

const Footer = () => {
    const  height = 500, width= 1000
    const showEmail = Math.min(height, width) > 500 
    return (
        <Grid container justify="center" spacing={2} style={{backgroundColor:'#2f2f2f'}} paddingBottom={1}>
            <Grid item  xs={showEmail ? 4 : 6}>
                <Box xs={12} textAlign={'center'}>
                    <Box display={'flex'} gap={'1rem'} justifyContent={'center'}> 
                        <Box display={'flex'} flexDirection='column' textAlign={'left'} marginTop='-3px'>
                        
                        <Typography variant="h5" fontWeight={'bold'} paddingBottom='8px' style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        </Typography>
                            {   
                                <Typography variant="h6" fontWeight={'bold'} paddingTop='2px' key={11}>
                                <a href={res} style={{textDecoration:'underline'}}> {"Resumé"} </a>
                            </Typography>

                            }
                            

               
        
                         </Box>
             
                    </Box>
                </Box>
            </Grid>
            {
                showEmail ?
                <Grid item  xs={4} >
                    <Box xs={12} textAlign={'center'}>
                        <Typography variant="h6" fontWeight={'bold'} marginTop={'1.5%'}>
                            dirkrkotze@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                : <></>
            }
            
            <Grid item  xs={showEmail ? 4 : 6} >
                <Box textAlign={'center'}  marginLeft={'5%'}>
                    <Typography variant="h5" fontWeight={'bold'} paddingBottom='8px' style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                                Get In Touch
                    </Typography>
                </Box>

                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}  marginLeft={'5%'} marginBottom={'2%'}>
                    {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} visible={true}/>
                    ))}
                </Box>
   
            </Grid>
        </Grid>
    );
}

export default Footer;