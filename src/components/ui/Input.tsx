import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input =({...rest}:IProps) => {
    return (
        <input 
          className="border-[1px] border-gray-300 p-2 shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 my-2 w-full bg-[#242424]"
          {...rest}
        />
    )
}

export default Input;