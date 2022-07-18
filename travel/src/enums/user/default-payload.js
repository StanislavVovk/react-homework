import {UserPayloadKey} from "./user-local-key";

const DEFAULT_LOGIN_PAYLOAD = {
    [UserPayloadKey.FULLNAME]: '',
    [UserPayloadKey.EMAIL]: '',
    [UserPayloadKey.PASSWORD]: ''
}

const DEFAULT_REGISTRATION_PAYLOAD = {
    [UserPayloadKey.USERNAME]: '',
    [UserPayloadKey.EMAIL]: '',
    [UserPayloadKey.PASSWORD]: ''
};

export { DEFAULT_REGISTRATION_PAYLOAD, DEFAULT_LOGIN_PAYLOAD };
