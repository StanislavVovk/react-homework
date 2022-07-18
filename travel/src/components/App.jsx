import {AppRoute} from "../enums/common";
import {Route, Routes} from "react-router-dom";
import SignIn from "./sign/components/login-form/sign-in";
import SignUp from "./sign/components/registration-form/sign-up";
import Footer from "./footer/footer";


function App() {
    return (
        <div>
            <Routes>
                <Route path={AppRoute.SIGN_IN} element={<SignIn/>}/>
                <Route path={AppRoute.SIGN_UP} element={<SignUp/>}/>

            </Routes>
            <Footer/>
        </div>

    )
        ;
}

export default App;
