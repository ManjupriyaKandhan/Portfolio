import React from 'react';
import './projects.css';
import website1 from '../images/Website1.avif';
import website2 from '../images/Website2.jpg';
import website3 from '../images/Website3.jpg';


function Projects() {


    const data = [
        {
            image: website1,
            heading: 'Learning Center',
            description: 'Which is completely using HTML, CSS, Javascript and React JS (CRUD Operation), maintaining data and files through API calls',
            // link: 'https://github.com/jvlcode/jvlcart'
        },
{
    image: website2,
    heading: 'Shine Tourism',
        description: 'Which is completely using HTML, CSS, Javascript and React JS. This website promotes tourism destinations and services, providing information and booking options for traveler',
            // link: 'https://github.com/jvlcode/food'
        },
{
    image: website3,
    heading: 'Dental Care',
        description: 'Which is completely using HTML, CSS, Javascript and React JS. Developeda web application to streamline appointment scheduling, patient services management, and communication for a dental care clinic.',
            // link: 'https://github.com/jvlcode/blog'
        }
    ]


return <section id='projects'> <div className='container mt-5 text-center'>
    <h1 className='available mt-5'>Projects</h1>
    <div className='row mt-5'>
        {
            data.map((list) => {
                return <div className='exp col-sm-12 col-md-6 col-lg-4 my-4 mx-5'>
                    <div class="card" style={{ width: "25rem" }}>
                        <img src={list.image} class="card-img-top"  alt="..."  />
                        <div class="card-body">
                        <h4 class="card-title">{list.heading}</h4>
                            <p class="card-text">{list.description}</p>
                        </div>
                    </div>

                </div>
            })
        }

    </div>

</div>
</section>


}

export default Projects