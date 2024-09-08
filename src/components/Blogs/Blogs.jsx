import React from 'react';
import { useState, useEffect} from 'react';

const Blogs = () => {

    const [Blogs, setBlogs] = useState([]);
    
    useEffect( () => {
        fetch('public/blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data));
    },[])
    return (
        <div>
            <h1>All Blogs: {Blogs.length}</h1>
        </div>
    );
};

export default Blogs;