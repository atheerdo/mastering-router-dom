import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import HomePage from '../Pages/Index';
import AboutPage from '../Pages/About';
import ContactPage from '../Pages/Contact';
import RootLayout from "../Pages/Layout";
import QuickStartPage from "../Pages/learn";
import LearnLayout from "../Pages/learn/Layout";
import InstallationPage from "../Pages/learn/Installation";
import ThinkingInReactPage from "../Pages/learn/ThinkingInReact";
import ContributePage from "../Pages/Contribute";
import LoginPage from "../Pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../Pages/PageNotFound";

const isLoggedIn = true;
const userData:{email:string} | null = isLoggedIn ? {email:"Email@gmail.com"} : null;

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout/>} errorElement={<ErrorHandler statusCode={404} message="Not Found!"/>}>
                <Route index element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="contribute" element={<ProtectedRoute isAllowed={isLoggedIn} redirectPath={"/login"} data={userData}>
                    <ContributePage/>
                </ProtectedRoute>}/>
            
            
                <Route path="login" element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath={"/contribute"} data={userData}>
                    <LoginPage/>
                </ProtectedRoute>}/>
            </Route>
                    <Route path="/learn" element={<LearnLayout/>}>
                    <Route index element={<QuickStartPage/>} />
                    <Route path="Installation" element={<InstallationPage/>} />
                    <Route path="Thinking-In-React" element={<ThinkingInReactPage/>} />
            </Route>

            <Route path="*" element={<PageNotFound/>}/>
        
        </>
    )
);

export default router;