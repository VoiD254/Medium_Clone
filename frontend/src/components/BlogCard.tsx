import { Link } from "react-router-dom";
import { Avatar } from "./Avatar"

interface BlogCardProps{
    id: number,
    authorName: string,
    title: string,
    content: string,
    publishDate: string
}

export const BlogCard = ({id, authorName, title, content, publishDate}: BlogCardProps) =>{
    return(
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 max-w-screen-lg cursor-pointer">   
                <div className="flex">
                    <Avatar name={authorName[0]} size="small" /> 
                    <div className="font-normal pl-2 text-sm flex justify-center flex-col">{authorName} </div>
                    <div className="flex justify-center flex-col pl-2">
                        <div className="h-1 w-1 rounded-full bg-slate-500"></div>
                    </div>
                    <div className="pl-2 font-light text-gray-500 flex justify-center flex-col">
                        {publishDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-light">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin">
                    {`${Math.ceil(content.length / 100)} minute(s)`}
                </div>
            </div>
        </Link>
    );
}
