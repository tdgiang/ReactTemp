/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListModule = async (body) =>
  PostData(url.urlModule, body)
    .then((res) => res)
    .catch((err) => null);

export const createModule = async (body) =>
  PostData(url.urlCreateModule, body)
    .then((res) => res)
    .catch((err) => null);

export const updateModule = async (body) =>
  PostData(url.urlUpdateModule, body)
    .then((res) => res)
    .catch((err) => null);

export const detailModule = async (id, body) =>
  GetURL(`${url.urlGetListModule}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteModule = async (body) =>
  PostData(url.urlDeleteModule, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusModule = async (body) =>
  PostData(url.changeStatusModule, body)
    .then((res) => res)
    .catch((err) => null);
