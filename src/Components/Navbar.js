import React from 'react';
import './navbar.css';

function Navbar() {
  return (
   

    <nav class="navbar navbar-expand-sm bg-primary">
                <div class=" logo container-fluid">
                    <a class="navbar-brand" href="#">  KM Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">

                            <a class="nav-link" href="/"><i class="fa fa-home"></i> Home</a>
                            <a class="nav-link" href="#about"><i class="fa fa-info-circle"></i>About</a>
                            <a class="nav-link" href="#projects"><i class="fa fa-file" aria-hidden="true"></i> Projects</a>
                            <a class="nav-link" href="#resume"><i class="fa fa-address-card" aria-hidden="true"></i> Resume</a>
                            <a class="nav-link" href="#contact"> <i class="fa fa-phone"></i>Contact</a>

                        </div>

                    </div>

                     
                    
                </div>
                
                


            </nav>
         
  )
}

export default Navbar