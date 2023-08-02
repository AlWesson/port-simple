import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import me from '../images/avatar_pic.png';
import './about.css';

const styl = makeStyles((s) => ({
    
    
    large: {
        width: s.spacing(10),
        height: s.spacing(10),
      },
}));

export function About () {
    const classes = styl();
    return (
        <div>
            <h3 style={{textAlign: 'center', fontFamily: 'monospace' ,fontSize: '30px', color: 'dimgray' }}> About </h3>
            <div className="case">
            <Avatar alt="self" src={me} className={classes.large} style={{boxShadow: "0px 3px 3px black"}} />
            </div>
            <Typography align="center" variant="h5">
            I'm Albert Hernandez. I'm an avid artist, programmer, and cat dad of two. 
            I graduated from the full stack developer coding boot camp at UC Berkeley's extension in July of 2023 after getting my associates degree in computer science at the end of 2022. 
            I am eager to further improve my skillset. 
            I am working on my professional development by obtaining Microsoft Azure certificates at this time. I also do freelance work developing websites. 
            I welcome the opportunity to tell you more about myself and why I'm the right fit for your company!
            </Typography>
        </div>
    )

}

export default About;