import './Card.css';

import img from '../reto/images/bg-pattern-card.svg'
import imgProfile from '../reto/images/image-victor.jpg'

const Card = () => {
    return(
        <div className="card">
            <img src={img} alt="" className='img'/>
            <img src={imgProfile} alt="" className='img-profile' />
            <div className='card-body'>
                <div className='card-body-info'>
                    <div>
                        <h2>Victor Crest</h2>
                        <p>26</p>
                    </div>
                    <p>London</p>
                </div>
                <hr />
                <div className='card-body-flp'>
                    <div className='stats-socialnet'>
                        <h2 className='sub-title'>80k</h2>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h2>80k</h2>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h2>80k</h2>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;