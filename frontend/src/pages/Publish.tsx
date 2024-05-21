import { ChangeEvent, useState } from "react";
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return(
        <div>
            <AppBar/>
            <div className="flex justify-center pt-8 w-full">
                <div className="max-w-screen-lg w-full"> 
                    <input onChange={(e) =>{
                        setTitle(e.target.value);
                    }} type="text" id="helper-text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500" placeholder="Title"/>

                    <TextEditor onChange={(e) =>{
                        setDescription(e.target.value);
                    }}/>
                    <button onClick={async () =>{
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content : description
                        },{
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`);
                    }} type="submit" className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    );
}

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return(
        <div className="mt-2">
            <div className="w-full mb-4 ">
                <div className="flex items-center justify-between border rounded-lg">
                    <div className="bg-white w-full py-2 rounded-b-lg">
                        <label className="sr-only">Publish post</label>
                        <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 border-0 pl-2 pt-2" placeholder="Write an article..." required />
                    </div>
                </div>
            </div>   
        </div>
    );
}
