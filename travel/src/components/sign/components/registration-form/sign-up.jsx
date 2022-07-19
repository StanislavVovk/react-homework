import {Input} from "../../../../commons/commons";
import Header from "../../../header/header";
import {AppRoute} from "../../../../enums/common";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate(AppRoute.ROOT)
    }
    return (
        <>
            <Header/>
            <main className="sign-up-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form
                    className="sign-up-form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <h2 className="sign-up-form__title">Sign Up</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Full name</span>
                        <Input
                            name={"full-name"}
                            type={"text"}
                            required={true}
                        />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <Input
                            name={"email"}
                            type={"email"}
                            required={true}
                        />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <Input
                            name={"password"}
                            type={"password"}
                            autoComplete={"new-password"}
                            required={true}
                        />
                    </label>
                    <button className="button" type="submit">Sign Up</button>
                </form>
                <span>
        Already have an account?
            <a href={AppRoute.SIGN_IN} className="sign-up-form__link">Sign In</a>
            </span>
            </main>
        </>
    )
}
export default SignUp