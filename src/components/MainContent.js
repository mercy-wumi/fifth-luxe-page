import Card from './Card'
import ImageOne from '../images/judeusSamson.png'
import ImageTwo from '../images/samson.png'
import ImageThree from '../images/judeusCute.png'
import ImageFour from '../images/judeusFashion.png'
import ImageFive from '../images/samsonGuy.png'
import ImageSix from '../images/judeusGuy.png'

const MainContent = () => {
    const cards = [
        {
            img: ImageOne,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageTwo,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageThree,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageFour,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageFive,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageSix,
            name: 'Adela Top',
            amount: '$239.00'
        }
    ]
    return (
        <div className='w-11/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:-mt-16'>
            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        img={card.img}
                        name={card.name}
                        amount={card.amount}
                    />
                )
            })}
        </div>
    )
}

export default MainContent