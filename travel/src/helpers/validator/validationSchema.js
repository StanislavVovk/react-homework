import Joi from 'joi';
import {UserValidationRule} from "./validationRules";
import {UserValidationMessage} from "./validatorErrors";
import {UserPayloadKey} from "../../enums/user/user-local-key";

const login = Joi.object({
        [UserPayloadKey.USERNAME]: Joi.string()
            .trim()
            .min(UserValidationRule.USERNAME_MIN_LENGTH)
            .max(UserValidationRule.USERNAME_MAX_LENGTH)
            .required()
            .messages({
                'string.empty': UserValidationMessage.USERNAME_REQUIRE,
                'string.min': UserValidationMessage.USERNAME_MIN_LENGTH,
                'string.max': UserValidationMessage.USERNAME_MAX_LENGTH
            }),
        [UserPayloadKey.PASSWORD]: Joi.string()
            .trim()
            .min(UserValidationRule.PASSWORD_MIN_LENGTH)
            .max(UserValidationRule.PASSWORD_MAX_LENGTH)
            .required()
            .messages({
                'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
                'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH,
                'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH
            })
    }
)

const registration = Joi.object({
    [UserPayloadKey.FULLNAME]: Joi.string()
        .trim()
        .min(UserValidationRule.FULLNAME_MIN_LENGTH)
        .max(UserValidationRule.FULLNAME_MAX_LENGTH)
        .required()
        .messages({
            'string.empty': UserValidationMessage.FULLNAME_REQUIRED,
            'string.min': UserValidationMessage.FULLNAME_MIN_LENGTH,
            'string.max': UserValidationMessage.FULLNAME_MAX_LENGTH
        }),
    [UserPayloadKey.USERNAME]: Joi.string()
        .trim()
        .min(UserValidationRule.USERNAME_MIN_LENGTH)
        .max(UserValidationRule.USERNAME_MAX_LENGTH)
        .required()
        .messages({
            'string.empty': UserValidationMessage.USERNAME_REQUIRE,
            'string.min': UserValidationMessage.USERNAME_MIN_LENGTH,
            'string.max': UserValidationMessage.USERNAME_MAX_LENGTH
        }),
    [UserPayloadKey.EMAIL]: Joi.string()
        .trim()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': UserValidationMessage.EMAIL_WRONG,
            'string.empty': UserValidationMessage.EMAIL_REQUIRE
        }),
    [UserPayloadKey.PASSWORD]: Joi.string()
        .trim()
        .min(UserValidationRule.PASSWORD_MIN_LENGTH)
        .max(UserValidationRule.PASSWORD_MAX_LENGTH)
        .required()
        .messages({
            'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
            'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH,
            'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH
        })
});

export { registration, login };
