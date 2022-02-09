/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListStaticpage = async (body) =>
  PostData(url.urlGetListStaticpage, body)
    .then((res) => res)
    .catch((err) => null);

export const createStaticpage = async (body) =>
  PostData(url.urlCreateStaticpage, body)
    .then((res) => res)
    .catch((err) => null);

export const updateStaticpage = async (body) =>
  PostData(url.urlUpdateStaticpage, body)
    .then((res) => res)
    .catch((err) => null);

export const detailStaticpage = async (id, body) =>
  GetURL(`${url.urlDetailStaticpage}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteStaticpage = async (body) =>
  PostData(url.urlDeleteStaticpage, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusStaticPage = async (body) =>
  PostData(url.changeStatusStaticPage, body)
    .then((res) => res)
    .catch((err) => null);
