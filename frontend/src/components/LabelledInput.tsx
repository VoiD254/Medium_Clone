import { ChangeEvent } from "react";

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export const LabelledInput = ({label, placeholder, onChange, type}: LabelledInputType) =>{
    return(
        <div>
            <div>
                <label className="block mb-2 text-md font-medium text-black mt-2">{label}</label>
                <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required onChange={onChange} />
            </div>
        </div>
    );
}