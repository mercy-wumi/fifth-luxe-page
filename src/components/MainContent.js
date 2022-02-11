import Card from './Card'
import ImageOne from '../images/judeusSamson.png'

const MainContent = () => {
    const cards = [
        {
            img: ImageOne,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageOne,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageOne,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageOne,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageOne,
            name: 'Adela Top',
            amount: '$239.00'
        },
        {
            img: ImageOne,
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