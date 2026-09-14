import React from 'react'
import banner from "../../assets/images/banner.jpg"
import { Link } from 'react-router-dom';
import { blogs } from '../../data';

const Card = (props) => {
     return (
        <>
            {blogs.map(({ title, category, image, date }, i) => (
                <Link to={`/blog/${title}`} key={i}>
                <div className='bg-white w-80 h-100 p-5 shadow-md rounded-md flex flex-col justify-between cursor-pointer'>
                    <img className='rounded-lg w-auto mx-auto' src={image} />
                    <h3 className='text-xl'>{title}</h3>
                    <div className='flex justify-between items-center'>
                        <p>{date}</p>
                        <span className='bg-primary text-white uppercase px-7 py-2 rounded-lg'>
                            {category}
                        </span>
                    </div>
                </div>
                </Link>
            ))}</>
    )
}

export default Card
