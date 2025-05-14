import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

interface IProps{

}

const ContributePage =({}:IProps) => {
  const {state} = useLocation();
 
    return (
        <div className="mx-16">
              <h2 className="text-center mb-3">Email: {state.email}</h2>
              <h2 className="text-center mb-3">Issue: Bug Report</h2>
              <form className="space-y-3 max-w-sm mx-auto p-4 rounded-lg shadow-md">
                <Textarea/>
                <Button>Submit New Issue</Button>
              </form>
        </div>   
    )
}

export default ContributePage;