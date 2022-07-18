import {UserValidationRule} from "./validationRules";
import {UserPayloadKey} from "../../enums/user/user-local-key";
import {maxCharacter, minCharacter} from "./errorMessageFormer";

const UserValidationMessage = {
    FULLNAME_REQUIRED: 'Full name is required',
    FULLNAME_MIN_LENGTH: minCharacter({target:UserPayloadKey.FULLNAME, length: UserValidationRule.FULLNAME_MIN_LENGTH}),
    FULLNAME_MAX_LENGTH: maxCharacter({target:UserPayloadKey.FULLNAME, length: UserValidationRule.FULLNAME_MAX_LENGTH}),
    USERNAME_REQUIRE: 'Username is required',
    USERNAME_MIN_LENGTH: `Username must be at least ${UserValidationRule.USERNAME_MIN_LENGTH} characters long`,
    USERNAME_MAX_LENGTH: `Username must be at most ${UserValidationRule.USERNAME_MAX_LENGTH} characters long`,
    EMAIL_REQUIRE: 'Email is required',
    EMAIL_WRONG: 'Email is wrong',
    PASSWORD_REQUIRE: 'Password is required',
    PASSWORD_MIN_LENGTH: `Password must be at least ${UserValidationRule.PASSWORD_MIN_LENGTH} characters long`,
    PASSWORD_MAX_LENGTH: `Password must be at most ${UserValidationRule.PASSWORD_MAX_LENGTH} characters long`
};

export { UserValidationMessage };
