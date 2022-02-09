/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListLogin = async (body) =>
  PostData(url.urlGetListLogin, body)
    .then((res) => res)
    .catch((err) => null);

export const getListApi = async (body) =>
  PostData(url.urlGetListApi, body)
    .then((res) => res)
    .catch((err) => null);

export const getListAction = async (body) =>
  PostData(url.urlGetListLoginAction, body)
    .then((res) => res)
    .catch((err) => null);
