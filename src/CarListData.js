import auto from './auto.jpeg'
import bike from './bike.jpeg'
import mini from './mini.jpeg'
import primeSedan from './prime sedan.jpeg'
import primeSuv from './prime suv.jpeg'
const CarListData=[
    {
        id:1,
        name:'Auto',
        seat:3,
        desc:'Get ride at you doorsteps',
        amount:100,
        image:auto
    },
    {
        id:2,
        name:'Bike',
        seat:1,
        desc:'Beat the traffic on a bike',
        amount:50,
        image:bike
    },   
    {
        id:3,
        name:'Mini',
        seat:3,
        desc:'Comfortable economic ride',
        amount:150,
        image:primeSuv
    },
    {
        id:4,
        name:'Prime Sedan',
        seat:4,
        desc:'Spacious sedan,top drivers',
        amount:200,
        image:mini
    },
    {
        id:5,
        name:'Prime SUV',
        seat:6,
        desc:'Spacious SUVs',
        amount:250,
        image:primeSedan
    }
]
export default CarListData;