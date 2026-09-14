import { useState } from 'react';
import Button from '../Button';
import { category } from '../../data';
const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [blogCategory, setBlogCategory] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // preview URL
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title, description, blogCategory, image);
        setTitle("");
        setBlogCategory("");
        setDescription("");
        setImage(null);
        setPreview(null);
    };

    return (
        <div className='bg-secondary w-[100%] h-screen flex justify-center items-center'>
            <form
                className="bg-white shadow-lg px-12 py-20 rounded mx-4"
                onSubmit={(e) => {
                    submitHandler(e)
                }}
            >
                <h1 className='text-3xl'>Add Blog</h1>
                {/* TITLE  */}

                <div className='my-2 w-full'>
                    <label
                        className='py-2' htmlFor="title"
                    >
                        Title:
                    </label>
                    <input
                        className='w-full border-2 border-gray-400 rounded-md px-4 py-2 outline-none'
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                {/* CATEGORY  */}

                <div className='my-2 w-full'>
                    <label
                        className='py-2' htmlFor="title"
                    >
                        Category:
                    </label>
                    <select
                        className='w-full border-2 border-gray-400 rounded-md px-4 py-2 py-2 outline--gray-400'
                        name="category"
                        id="category"
                        onChange={(e) => {
                            setBlogCategory(e.target.value)
                        }}
                    >
                        <option
                            disabled
                            className='w-full border-2 border-gray-400 rounded-md px-4 py-2'
                        >
                            Select Category
                        </option>
                        {
                            category.map((elem, i) => (
                                <option
                                    key={i}
                                    className='w-full border-2 border-gray-400 rounded-md px-4 py-2'
                                    value={elem}
                                >
                                    {elem}
                                </option>
                            ))
                        }
                    </select>
                </div>

                {/* IMAGE  */}

                <div className='my-2 w-full'>
                    <label className='py-2' htmlFor="image">Blog Image:</label>
                    <input
                        className='w-full border-2 border-gray-400 rounded-md px-4 py-2 outline-none'
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="preview"
                            className='mt-3 w-40 h-40 object-cover rounded-lg border-gray-400'
                        />
                    )}
                </div>

                {/* DESCRIPTION  */}

                <div className='my-2 w-full'>
                    <label
                        className='my-5'
                        htmlFor="blogContent"
                    >
                        Blog Details:
                    </label>
                    <textarea
                        className='w-full border-2 border-gray-400 rounded-md px-4 py-2 outline-none'
                        name="blogContent"
                        id="blogContent"
                        rows={4}
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    ></textarea>
                </div>
                <Button title="Add Blog" classDetail='w-full' />
            </form>
        </div>
    )
}

export default AddBlog
