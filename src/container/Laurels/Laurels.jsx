import React from 'react'
import { images, data } from '../../constants'
import { SubHeading } from '../../components'
import './Laurels.css'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className='app__laurels_awards-card'>
        <img src={imgUrl} alt='award' />

        <div className='app__laurels_awards-card_content'>
            <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>

            <p className='p__cormorant'>{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => {
    return (
        <div id='awards'>
            <div className='app__bg app__wrapper section__padding'>
                <div className='app__wrapper_info'>
                    <div className='app__logo'>
                        <img src={images.logo} />
                    </div>
                    <SubHeading title="Awards & recognition" />

                    <h1 className='headtext__cormorant'>Our Laurels</h1>

                    <div className='app__laurels_awards'>
                        {
                            data.awards.map((award) => <AwardCard award={award} key={award.title} />)
                        }
                    </div>
                </div>

                <div className='app__wrapper_img'>
                    <img src={images.laurels} alt='laurels' />
                </div>
            </div>
        </div>
    )
}

export default Laurels