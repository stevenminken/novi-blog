import React from 'react';
import {Link, useParams} from "react-router-dom";
import "./BlogOverview.css"
import blogs from '../../data/posts.json';

const BlogOverview = () => {

    return (
        <div>
            <h1>Blog overzicht met {blogs.length} titels</h1>
            <ul className="overview-list">
                {blogs.map((blog) => {
                    return (
                        <li key={blog.id}>
                            <Link to={"/blogpage/" + blog.id}>{blog.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default BlogOverview;