/* eslint-disable handle-callback-err */
import { PostData, GetURL, GetData } from "../helpers";
import url from "../url";

export const getListMethod = async (body) =>
  PostData(url.urlGetListMethod, body)
    .then((res) => res)
    .catch((err) => null);

export const createMethod = async (body) =>
  PostData(url.urlCreateMethod, body)
    .then((res) => res)
    .catch((err) => null);

export const updateMethod = async (body) =>
  PostData(url.urlUpdateMethod, body)
    .then((res) => res)
    .catch((err) => null);

export const detailMethod = async (id, body) =>
  GetURL(`${url.urlDetailMethod}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteMethod = async (body) =>
  PostData(url.urlDeleteMethod, body)
    .then((res) => res)
    .catch((err) => null);

export const getListMethodPicker = async (body) =>
  GetData(url.urlListMethodPicker, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusMethod = async (body) =>
  PostData(url.changeStatusMethod, body)
    .then((res) => res)
    .catch((err) => null);
