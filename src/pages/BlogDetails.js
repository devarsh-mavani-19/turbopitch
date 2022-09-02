import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import BlogDetailsContent from '../components/blog/BlogDetailsContent';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import { useRouter } from 'next/router';

const BlogDetails = ({blogId}) => {
    blogId = parseInt(blogId, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    return (
        <>
            <SEO title="Blog Details || JSG Developers" />
            <Layout>
                <div className="rn-blog-details-area">
                    <BlogDetailsContent data={data[0]}  />
                </div>
            </Layout>
        </>
    )
}
export default BlogDetails;