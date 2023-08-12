import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;  we can use this by giving parameter as props
    // const title = props.title;


    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (  /*key property is used to keep track each item in the dom as it outputs it*/
                <div className="blog-preview" key={blog.id}> 
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2> 
                        <p>written by { blog.author }</p>
                    </Link>   
                </div>
            ))}
        </div> 
    );
}
 
export default BlogList;