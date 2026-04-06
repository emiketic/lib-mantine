export type CommonErrorCode =
  | "APP_ERR_AUTH_INVALID_CREDENTIALS"
  | "APP_ERR_AUTH_LOCKED"
  | "APP_ERR_AUTH_REDIRECT"
  | "APP_ERR_SIGNUP_EMAIL_ALREADY_EXISTS"
  | "APP_ERR_USER_NOT_FOUND"
  | "APP_ERR_MEDIA_NOT_FOUND"
  | "APP_ERR_UNAUTHORIZED"
  | "APP_ERR_GENERIC"
  | "APP_ERR_UNKNOWN";

export interface CommonError<T = CommonErrorCode> {
  code: T;
  message?: string;
  exception?: Error;
}
