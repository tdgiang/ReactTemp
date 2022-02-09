/* eslint-disable handle-callback-err */
import { PostData, GetURL, GetData } from "../helpers";
import url from "../url";

export const getListGroups = async (body) =>
  PostData(url.urlGetListGroup, body)
    .then((res) => res)
    .catch((err) => null);

export const createGroup = async (body) =>
  PostData(url.urlCreateGroup, body)
    .then((res) => res)
    .catch((err) => null);

export const updateGroup = async (body) =>
  PostData(url.urlUpdateGroup, body)
    .then((res) => res)
    .catch((err) => null);

export const detailGroup = async (id, body) =>
  GetURL(`${url.urlDetailGroup}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteGroup = async (body) =>
  PostData(url.urlDeleteGroup, body)
    .then((res) => res)
    .catch((err) => null);

export const getListActionByGroup = async (id, body) =>
  GetURL(`${url.urlListActionByGroup}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);
export const changeStatusGroup = async (body) =>
  PostData(url.changeStatusGroup, body)
    .then((res) => res)
    .catch((err) => null);
