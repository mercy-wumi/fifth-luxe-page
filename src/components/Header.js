import logo from '../images/logo.png'
import search from '../images/search.png'
import shopbag from '../images/shopbag.png'


const header = () => {
    return (
        <div className='md:flex justify-between w-11/12 m-auto items-start'>
            <p className='hidden md:block font-bold pt-16'>Follow - / Fb. / Tw. / In.</p>
            <img src={logo} alt='logo' className='-mt-4 m-auto md:m-0' />
            <div className='-mt-40 justify-around mb-4 md:mb-0 md:mt-0 flex md:justify-between items-center pt-16'>
                <p className='font-bold'>$239.00</p>
                <img src={search} alt='search' className='ml-8 text-[#182754] bg-[#E4EBFF] p-2 rounded-full opacity-[0.3]' />
                <img src={shopbag} alt='shopbag' className='ml-8 text-[#1C2A39]' />
                <p className='bg-[#253B80] w-[20px] h-[20px] rounded-full text-white flex justify-center items-center -mt-8  -ml-16 md:-ml-1 font-bold text-sm'>4</p>
            </div>
        </div>
    )
}

export default header