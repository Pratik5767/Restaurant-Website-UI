import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='app__newsletter'>
            <div className='app__newsletter-heading'>
                <SubHeading title='NewsLetter' className='News' />

                <h1 className='headtext__cormorant'>Subscribe to our newsLetter</h1>

                <p className='p__opensans'>And never miss latest updates</p>
            </div>

            <div className='app__newsletter-input flex__center'>
                <input
                    type='email'
                    placeholder='Enter your Email address'
                />

                <button className='custom__button'>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter