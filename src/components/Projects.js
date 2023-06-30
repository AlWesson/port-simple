
import React from 'react';
import './project.css';
import img1 from '../images/blackjack_screenshot.png'
import img2 from '../images/Screenshot_Project1.png'
import img3 from '../images/phish2.jpg'
import img4 from '../images/croissant.jpg'
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
            <Button  variant='contained' className='buttn'> Placeholder </Button>
            <Button variant='contained' className='buttnnn'> GitHub </Button>
            </div>

            <div className='pic' >
            <img src={img4} style={{width: '100%', border: 'dashed gold 4px'}}  />
            <Button  variant='contained' className='buttn'> Placeholder </Button>
            <Button variant='contained' className='buttnnn'> GitHub </Button>
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




{/*  <a href={D.link} target={D.tar}></a>   onClick={handleClickOpen}*/}
 {/* onMouseEnter={e => {
     setStyle({display: 'block'});
 }}
 onMouseLeave={e => {
     setStyle({display: 'none'})
 }}style={style} const [style, setStyle] = React.useState();
  */}
 {/* {data.map((D, index) => {
    
                 return (
                     <div className='pic' key={index} 
                     >style={style} 
                        onMouseEnter={e => {
                setStyle({display: 'block'});
                }}
                onMouseLeave={e => {
                setStyle({display: 'none'})
                }}>style={style}
                         
                        <Button  variant='contained' className='buttn'>  {D.title}</Button>
                        <Button variant='contained' className='buttnnn'> GitHub </Button>
                   </div>
                 )
             })}
           */}
