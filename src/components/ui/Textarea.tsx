import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{

}

const Textarea =({...rest}:IProps) => {
    return (
        <textarea 
         className="border-[1px] boredr-gray-300 shadow-md focus:border-[#149eca] focus:outline-none rounded-md p-2 w-full bg-[#242424] text-white"
         placeholder="Type here..."

         rows={6}
        {...rest}
        />
    )
}

export default Textarea;