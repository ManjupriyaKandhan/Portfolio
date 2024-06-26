import React from 'react';
import resume from '../images/resume.jpg';
import './resume.css';

function Resume() {
  return (
    <section id='resume'>
    <div className='middle'>
    <div className='container-fluid'>
      <div className='me row'>
     
         <div className='leftpart2 col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={resume} alt='skill' />
        </div>

        <div className='rightpart col-sm-12 col-md-6 col-lg-4 mt-5'>
        <h1 className='text-white'> Resume </h1>
          <p className='respar mt-5'>You can view and download my resume.</p>

          <button className='down mt-3'>Download </button>
        </div>


        </div>
        </div>


      </div>

      </section>
  )
}

export default Resume