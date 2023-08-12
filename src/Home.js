import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {  
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (  /*Here we are using prop after calling BlogList componente */
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}  
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}  
        </div>
    ); /*These are called conditional rendering */
}
 
export default Home;