import React from 'react'
import { images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id='about'>
            <div className='app__aboutus app__bg flex__center section__padding'>
                <div className='app__aboutus-overlay flex__center'>
                    <img src={images.G} alt='G letter' />
                </div>

                <div className='app__aboutus-content flex__center'>
                    <div className='app__aboutus-content_about'>
                        <h1 className='headtext__cormorant'>About Us</h1>

                        <img src={images.spoon} alt='about_spoon' className='spoon__image' />

                        <p className='p__opensans'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorem eum aliquid minima reiciendis, laborum est, dolores soluta, rerum iure facilis cum alias! Autem ipsa, harum consequatur provident tempora pariatur.
                        </p>

                        <button type='button' className='custom__button'>Know More
                        </button>
                    </div>

                    <div className='app__aboutus-content_knife flex__center'>
                        <img src={images.knife} alt='about-knife' />
                    </div>

                    <div className='app__aboutus-content_history'>
                        <h1 className='headtext__cormorant'>Our History</h1>

                        <img src={images.spoon} alt='about_spoon' className='spoon__image' />

                        <p className='p__opensans'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorem eum aliquid minima reiciendis, laborum est, dolores soluta, rerum iure facilis cum alias! Autem ipsa, harum consequatur provident tempora pariatur.
                        </p>

                        <button type='button' className='custom__button'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs