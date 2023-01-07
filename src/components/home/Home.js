import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import Footer from "../footer/footer.js"
import res from "../../img/Resume.pdf"

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'column'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
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
         //<Footer/>
      </Box>
   )
}