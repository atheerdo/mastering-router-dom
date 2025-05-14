import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aside from "../../components/LeranAside";

interface IProps{

}

const LearnLayout =({}:IProps) => {
    return (
        <>
     
            <Navbar/>
                     
            <Aside/>

            <Outlet/>

           
        </>
    )
}

export default LearnLayout;