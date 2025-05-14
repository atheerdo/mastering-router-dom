
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const LoginPage =() => {
    
    return (
        <div>
             <h2 className="text-2xl text-center">Login to Contribute</h2>
             <form className="space-y3 max-w-sm mx-auto p-4 rounded-lg shadow-md">

                   <Input placeholder="Email"/>
                   <Input placeholder="Password"/>

                   <Button>Login</Button>
             </form>
        </div> 
    )
}

export default LoginPage;