import './Card.css';

import Imgbgpf from './Imgbgpf'
import Perfil from './Perfil';
import Statsredes from './Statsredes';

const Card = () => {
    return(
        <div className="card">
            <Imgbgpf />
            <div className='card-body'>
                <Perfil />
                <hr />
                <Statsredes />
            </div>
        </div>
    )
}

export default Card;