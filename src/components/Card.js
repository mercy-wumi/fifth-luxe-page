// import judeusSamson from '../images/judeusSamson.png'
import cart from '../images/cart.png'
import heart from '../images/heart.png'

const card = ({ img, name, amount }) => {
    return (
        <div className='w-full'>
            <img src={img} alt='imageOne' className='w-full h-auto' />
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[#182754] text-xl'>{name}</p>
                <img src={cart} alt='cart' className='' />
            </div>
            <div className='flex justify-between items-center mt-1'>
                <p className='font-light text-[#888EA0] text-lg'>{amount}</p>
                <img src={heart} alt='heart' className='' />
            </div>
        </div>
    )
}

export default card