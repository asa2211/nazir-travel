import React from 'react'
import Tourpackages from '../pages/tourpackages'
import About from '../pages/about'
import Contact from '../pages/contact-us'
import Home from '../pages/home'
import Product from '../components/toursdetail'
import Booking from '../components/booking'
import Notfound from '../pages/404notfound'
export const routes = [
    {
        element:<Home/>,
        url:'/',
        name:'Home'
    },
    {
        element:<Tourpackages/>,
        url:'/tourpackages',
        name:'Tourpackages'
    },
    {
        element:<About/>,
        url:'/about',
        name:'About'
    },
    {
        element:<Contact/>,
        url:'/contact',
        name:'Contact us'
    },
    {
        element:<Notfound/>,
        url:'*',
    },
    {
        element:<Product/>,
        url:'/product/:id',
    },
    {
        element:<Booking/>,
        url:'/order/steps/:id',
    },
]