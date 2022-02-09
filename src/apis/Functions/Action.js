/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListActions = async (body) =>
  PostData(url.urlGetListAction, body)
    .then((res) => res)
    .catch((err) => null);

export const createAction = async (body) =>
  PostData(url.urlCreateAction, body)
    .then((res) => res)
    .catch((err) => null);

export const updateAction = async (body) =>
  PostData(url.urlUpdateAction, body)
    .then((res) => res)
    .catch((err) => null);

export const detailAction = async (id, body) =>
  GetURL(`${url.urlDetailAction}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteAction = async (body) =>
  PostData(url.urlDeleteAction, body)
    .then((res) => res)
    .catch((err) => null);
export const changeStatusAction = async (body) =>
  PostData(url.changeStatusAction, body)
    .then((res) => res)
    .catch((err) => null);
