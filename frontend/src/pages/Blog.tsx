import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { AppBar } from "../components/AppBar";

export const Blog = () =>{
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });  

    if(loading || !blog){
        return(
            <div>
                <AppBar/>
                <div className="flex h-screen flex-col justify-center">
                    <div className="flex justify-center">
                        <Spinner/>
                    </div>
                </div>
            </div>
        );
    }
    
    return(
        <div>
            <FullBlog blog={blog}/>
        </div>
    );
}