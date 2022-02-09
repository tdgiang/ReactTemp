/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListConfig = async (body) =>
  PostData(url.urlGetListConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const createConfig = async (body) =>
  PostData(url.urlCreateConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const updateConfig = async (body) =>
  PostData(url.urlUpdateConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const detailConfig = async (id, body) =>
  GetURL(`${url.urlDetailConfig}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteConfig = async (body) =>
  PostData(url.urlDeleteConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusConfig = async (body) =>
  PostData(url.changeStatusConfig, body)
    .then((res) => res)
    .catch((err) => null);
