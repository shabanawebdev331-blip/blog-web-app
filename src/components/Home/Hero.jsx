import React from 'react'
import banner from '../../assets/images/banner.jpg'
import Button from '../Button';


const Hero = () => {
    return (
        <section className='bg-cover bg-center h-[600px] flex items-center text-center' style={{ backgroundImage: `url(${banner})` }}
        >
            <div className='mx-28'>
                <h1 className='mb-2 font-bold md:text-6xl text-2xl'>The Power of <br className='hidden md:block' /> Consistent Habits</h1>
                <p className='my-5'>Small daily actions lead to extraordinary results.<br className='hidden md:block' /> Discover how building the right habbits can transform <br className='hidden md:block' /> your life and help you achieve your goal.</p>
                <Button title="Read More" />
            </div>
        </section>
    )
}

export default Hero
