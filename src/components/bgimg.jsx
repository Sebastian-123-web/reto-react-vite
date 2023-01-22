import svgTop from '../reto/images/bg-pattern-top.svg';
import svgBottom from '../reto/images/bg-pattern-bottom.svg';

const Bgimg = () => {
    return (
        <>
            <img src={svgTop} alt="" className='svg-top' />
            <img src={svgBottom} alt="" className='svg-bottom' />
        </>
    )
}

export default Bgimg;