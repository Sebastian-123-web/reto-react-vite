import img from '../reto/images/bg-pattern-card.svg'
import imgProfile from '../reto/images/image-victor.jpg'

const Imgbgpf = () => {
    return (
        <>
            <img src={img} alt="" className='img'/>
            <img src={imgProfile} alt="" className='img-profile' />
        </>
    )
}

export default Imgbgpf;