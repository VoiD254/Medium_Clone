import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SigninInput } from "@arnav1/medium-common";

export const SignInAuth = () =>{
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
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
                            Sign in to your Account
                        </div>
                        <div className="font-light text-slate-700 ml-4 mt-2 text-center">
                            Don't have an account ?
                            <Link to="/signup" className="underline pl-2">
                                "Sign Up"
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6">
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

                        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-5">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}