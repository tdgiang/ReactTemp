/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListBranch = async (body) =>
  PostData(url.urlGetListBranch, body)
    .then((res) => res)
    .catch((err) => null);

export const createBranch = async (body) =>
  PostData(url.urlCreateBranch, body)
    .then((res) => res)
    .catch((err) => null);

export const updateBranch = async (body) =>
  PostData(url.urlUpdateBranch, body)
    .then((res) => res)
    .catch((err) => null);

export const detailBranch = async (id, body) =>
  GetURL(`${url.urlDetailBranch}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteBranch = async (body) =>
  PostData(url.urlDeleteBranch, body)
    .then((res) => res)
    .catch((err) => null);

export const getListEmployeeBranch = async (body) =>
  PostData(url.urlListEmployeeBranch, body)
    .then((res) => res)
    .catch((err) => null);
export const changeStatusBranch = async (body) =>
  PostData(url.changeStatusBranch, body)
    .then((res) => res)
    .catch((err) => null);
