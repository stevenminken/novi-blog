import React from 'react';
import {useParams, Link} from "react-router-dom";
import blogs from '../../data/posts.json';

const BlogPage = () => {

    const {id} = useParams();

    const blog = blogs.find((blog) => {
        if (blog.id === id) {
            return blog;
        }
    });

    return (
        <>
            <h1>Blog</h1>
            <p>Dit is blog {blog.id}</p>
            <p>Titel: {blog.content}</p>
            <p>Datum: {blog.date}</p>
            <br/>
            <p>Klik <Link to="/BlogOverview">hier</Link> om terug te keren naar het overzicht</p>
        </>
    )

}
export default BlogPage;