import React from 'react'
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const categories = [
        {
            category: "Lifestyle",
            path: "/categories",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Travel",
            path: "/categories",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Technology",
            path: "/categories",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Business",
            path: "/categories",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Health",
            path: "/categories",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
        }
    ];
    return (
        <section className='flex justify-center items-center gap-5'>
            {categories.map(({ category, path, image }, i) => (
                <div key={i} className='flex justify-center items-center md:w-33 md:h-33 w-15 h-15 my-10 rounded-full bg-cover bg-center' style={{ 'background': `url(${image})` }}>
                    <Link
                        key={i}
                        to={`/categories/${category.toLowerCase()}`}
                        className='flex md:w-33 md:h-33 w-15 h-15 items-center justify-center rounded-full bg-contain bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <h2 className='rounded bg-black/50 md:px-2 md:py-1 md:text-xl text-xs text-white'>
                            {category}
                        </h2>
                    </Link>
                </div>
            ))}
        </section>
    )
}

export default CategoryList
