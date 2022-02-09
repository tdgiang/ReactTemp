/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListModuleType = async (body) =>
  PostData(url.urlModuleType, body)
    .then((res) => res)
    .catch((err) => null);

export const createModuleType = async (body) =>
  PostData(url.urlCreateModuleType, body)
    .then((res) => res)
    .catch((err) => null);

export const updateModuleType = async (body) =>
  PostData(url.urlUpdateModuleType, body)
    .then((res) => res)
    .catch((err) => null);

export const detailModuleType = async (id, body) =>
  GetURL(`${url.urlGetListModuleType}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteModuleType = async (body) =>
  PostData(url.urlDeleteModuleType, body)
    .then((res) => res)
    .catch((err) => null);
export const changeStautsModuleType = async (body) =>
  PostData(url.changeStautsModuleType, body)
    .then((res) => res)
    .catch((err) => null);
