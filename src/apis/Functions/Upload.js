/* eslint-disable handle-callback-err */
import { PostFormData } from "../helpers";
import url from "../url";

export const apiUploadFile = async (body) =>
  PostFormData(url.urlUploadFile, body)
    .then((res) => res)
    .catch((err) => null);
