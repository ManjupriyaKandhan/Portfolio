import React from 'react';
import './home.css';
import photo from '../images/photo.jpeg'

function Home () {
  return (
    <section>
    <div className='header'>
      <div className='container-fluid'>
        <div className='row mt-5'>
          <div className='part1 col-sm-12 col-md-6 col-lg-4 mt-5'>
            <p className='step1 '>Hi and welcome to</p>
            <h1 className='step2 mt-5'> <span style={{ color: "#ec559b" }}>My Portfolio</span> <br />Website</h1>
            <p className='step3 mt-3'>I am skilled and passionate web designer to creating <br /> visually appearing and user-friendly websites.</p>
          </div>

          <div className='part2 col-sm-12 col-md-6 col-lg-4 mt-5'>
            <img src={photo} alt='Portfolio' />
          </div>


        </div>




      </div>

    </div>
    </section>
  )
}

export default Home