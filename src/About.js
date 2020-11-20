import React from 'react';
import web from '../src/images/one.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';


const About = () => {
  return(
    <>
    <Common 
    name='Welcome to Contact Page' 
    imgsrc={web} 
    visit='/service' 
    btnname='Contact Now' />
    </>
  );
}

export default About;


