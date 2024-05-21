import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import { SignupInput } from "@arnav1/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = () =>{
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(e){
            console.error("Error", e);
        }
        
    }

    return(
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-bold">
                            Create An Account
                        </div>
                        <div className="font-light text-slate-700 ml-4 mt-2 text-center">
                            Don't have an account ?
                            <Link to="/signin" className="underline pl-2">
                                Login
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6">
                        <LabelledInput label="Full Name" placeholder="Enter your name" onChange={(e) =>{
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value 
                            })
                        }}/>
                        <LabelledInput label="Email" placeholder="Eg. email@example.com" onChange={(e) =>{
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value 
                            })
                        }}/>
                        <LabelledInput label="Password" type="password" placeholder="Minimum 6 characters" onChange={(e) =>{
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value 
                            })
                        }}/>

                        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-5">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}