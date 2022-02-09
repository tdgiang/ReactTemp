/* eslint-disable handle-callback-err */
import { PostData, GetURL, GetData } from "../helpers";
import url from "../url";

export const createSecurityKey = async (body) =>
  PostData(url.urlCreateSecurityKey, body)
    .then((res) => res)
    .catch((err) => null);

export const changeSecurityKey = async (body) =>
  PostData(url.urlChangeSecurityKey, body)
    .then((res) => res)
    .catch((err) => null);

export const forgotSecurityKey = async (body) =>
  PostData(url.urlForgotSecurityKey, body)
    .then((res) => res)
    .catch((err) => null);

export const getOtpSecurity = async (body) =>
  GetData(url.urlGetOTPSecurity, body)
    .then((res) => res)
    .catch((err) => null);
