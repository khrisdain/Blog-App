import { Link } from "react-router-dom";

const BlogList = ({blogs ,title}) => {
    
    return (
        <div className = "Blog-List">

        <h2>{ title }</h2>
        {blogs.map((blog) => (            
            <div className="blog-preview" key = {blog.id}>

            {/*the blogs link is kept in template literal becaue of the id is dynamic and hence we had to use
             a curly braces linking the object of blogs and its corresponding id */}
                <Link to= {`/blogs/${blog.id}`}>
                <h2> {blog.title} </h2>
                <p>Written by {blog.author} </p>
                </Link>
            </div>
          ))}

        </div>
      );
}
 
export default BlogList;