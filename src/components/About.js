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
                Full-stack developer, ready to make a difference in the industry!!
            </Typography>
        </div>
    )

}

export default About;