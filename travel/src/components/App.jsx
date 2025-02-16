import {AppRoute} from "../enums/common";
import {Route, Routes} from "react-router-dom";
import SignIn from "./sign/components/login-form/sign-in";
import SignUp from "./sign/components/registration-form/sign-up";
import Footer from "./footer/footer";
import Main from "./main/main";
import {Trip} from "./trip/Trip";


function App() {
    return (
        <div>
            <Routes>
                <Route path={AppRoute.SIGN_IN} element={<SignIn/>}/>
                <Route path={AppRoute.SIGN_UP} element={<SignUp/>}/>
                <Route path={"*"} element={<Main/>}/>
                <Route path={AppRoute.ROOT} element={<Main/>}/>
                <Route path={AppRoute.TRIP_$ID} element={<Trip/>}/>

            </Routes>
            <Footer/>
        </div>

    )
        ;
}

export default App;
