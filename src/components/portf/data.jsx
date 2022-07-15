import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
    {
        id : 1,
        image : IMG1,
        title : 'Ecommerce with React & Tailwind',
        github : ' https://github.com/mejorentresde/my-project ',
        demo : 'https://my-project-mejorentresde.vercel.app/'
    },
    {
        id : 2,
        image : IMG2,
        title : 'Quizz in Javascript',
        github : ' https://github.com/andressoibelzon/quizz-javascript ',
        demo : 'https://quizz-javascript.vercel.app/'
    },
    {
        id : 3,
        image : IMG3,
        title : 'Real Glassmorphism HTML & CSS',
        github : ' https://github.com/andressoibelzon/real-glassmorphism ',
        demo : 'https://real-glassmorphism.vercel.app/hp.html'
    }
]

export default data