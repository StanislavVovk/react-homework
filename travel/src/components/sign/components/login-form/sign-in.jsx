import {useNavigate} from 'react-router-dom';
import {DEFAULT_LOGIN_PAYLOAD} from "../../../../enums/user/default-payload";
import {login as loginSchema} from "../../../../helpers/validator/validationSchema";
import {Input} from "../../../../commons/commons";
import {AppRoute} from "../../../../enums/common";
import {useAppForm} from "../../../../helpers/useForm";
import Header from "../../../header/header";

const SignIn = () => {
    const {control, errors, handleSubmit} = useAppForm({
        defaultValues: DEFAULT_LOGIN_PAYLOAD,
        validationSchema: loginSchema
    });
    const navigate = useNavigate();
    // todo need to create validation processor
    return (
        <>
            <Header/>
            <main className="sign-in-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form
                    className="sign-in-form"
                    autoComplete="off"
                    onSubmit={handleSubmit(navigate(AppRoute.ROOT))}
                >
                    <h2 className="sign-in-form__title">Sign In</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <Input
                            name={"email"}
                            type={"email"}
                            control={control}
                            required={true}
                            errors={errors}
                        />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <Input
                            name={"password"}
                            type={"password"}
                            control={control}
                            autoComplete={"new-password"}
                            required={true}
                            errors={errors}
                        />
                    </label>
                    <button className={"button"} type="submit">Sign In</button>
                </form>
                <span>
        Don't have account
        <a href={AppRoute.SIGN_UP} className="sign-in-form__link">Sign Up</a>
            </span>
            </main>
        </>
    )
}

export default SignIn;