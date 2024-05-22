import React from 'react'
import { images } from '../../constants'
import './Header.css'
import { SubHeading } from '../../components'

const Header = () => {
    return (
        <div id='home'>
            <div className='app__header app__wrapper section__padding'>
                <div className='app__wrapper_info app__home'>
                    <SubHeading title="Chase the new flavour" />

                    <h1 className='app__header-h1'>The Key to Fine Dining</h1>

                    <p className='p__opensans' style={{ margin: '2rem 0' }}>
                        Sit tellus loborties sed senectus vivamus molestie Condimentum volutpat morbi facilisis quam scelerisque saplen.It penatibus aliquam amet tellus
                    </p>

                    <button type='button' className='custom__button'>Explore Menu</button>
                </div>

                <div className='app__wrapper_img app__home'>
                    <img src={images.welcome} />
                </div>
            </div>
        </div>
    )
}

export default Header