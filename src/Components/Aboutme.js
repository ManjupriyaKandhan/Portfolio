import React from 'react';
import './about.css';
import skill from '../images/skill.png';


function Aboutme() {
  return (
    <section id='about'>
    <div className='middle'>
      <div className='container-fluid'>
        <div className='me row'>
       
           <div className='leftpart col-sm-12 col-md-6 col-lg-4 mt-5'>
            <img src={skill} alt='skill' />
          </div>

          <div className='rightpart col-sm-12 col-md-6 col-lg-4 mt-5'>
          <h1 className='text-white text-center mx-5'> About Me <i class="fa fa-smile-o" aria-hidden="true"></i>  </h1>
            <p className='pb-5 mt-5'>Hi, I'm Manjupriya, a front-end web designer and developer proficient in HTML, CSS, JavaScript, Bootstrap, and React.</p>
            <p className='pb-5'>With a background in e-publishing, I recently completed a course in UI/React to transition from a Non-IT to IT career.</p>
            <p>My goal is to enhance my skills, knowledge, and experiences to achieve my career aspirations.</p>
          </div>


          </div>
          </div>


        </div>
        </section>
  )
}

export default Aboutme