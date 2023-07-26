
import React from 'react';
import './project.css';
import img1 from '../images/blackjack_screenshot.png'
import img2 from '../images/Screenshot_Project1.png'
import img3 from '../images/phish2.jpg'
import img4 from '../images/SS_p3.png'
import img5 from '../images/eT_ucb.png'
import img6 from '../images/scope.png'
import { Button, MenuItem, Menu } from '@material-ui/core';


export function Projects() {

    const [style, setStyle] = React.useState();
    
    
    return(
    <div>
        <h3 style={{textAlign: 'center', fontFamily: 'monospace' ,fontSize: '30px', color: 'dimgray' }}> Projects </h3>
        <div className='gallery'>
            
            <div className='pic' >               
            <img src={img1} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button  variant='contained' className='buttn' href='https://four-leaf-casino.herokuapp.com/login' target='_new'> 4-Leaf </Button>
            <Button variant='contained' className='buttnnn' href='https://github.com/ParticularSpace/WP-Cas' target='_new'> GitHub </Button>
            </div>

            <div className='pic' >
            <img src={img2} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button  variant='contained' className='buttn' href='https://particularspace.github.io/P1-Coffee-Shop-Locator/' target='_new'> Coffee-Locator </Button>
            <Button variant='contained' className='buttnnn' href='https://github.com/ParticularSpace/P1-Coffee-Shop-Locator' target='_new'> GitHub </Button>   
            </div>
        
            <div className='pic' >
            <img src={img5} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button variant='contained' className='buttnnn' href='https://github.com/AlWesson/employee_tracker' target='_new'> GitHub </Button>
            </div>

            <div className='pic' >
            <img src={img3} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button  variant='contained' className='buttn' > Placeholder </Button>
            <Button variant='contained' className='buttnnn' > GitHub </Button>
            </div>

            <div className='pic' >
            <img src={img4} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button  variant='contained' className='buttn' href='https://social-space-615b764ada9e.herokuapp.com/login' target='_new'> SocialSpace </Button>
            <Button variant='contained' className='buttnnn' href='https://github.com/Zed-CSP/SocialNetwork' target='_new'> GitHub </Button>
            </div>

            <div className='pic' >
            <img src={img6} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button  variant='contained' className='buttn'> Placeholder </Button>
            <Button  variant='contained' className='buttnnn'> GitHub </Button>
            </div>

        </div>
    </div>
    );

};

export default Projects;



//===