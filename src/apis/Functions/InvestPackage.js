/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListInvestPackage = async (body) =>
  PostData(url.urlGetListInvestPackage, body)
    .then((res) => res)
    .catch((err) => null);

export const createInvestPackage = async (body) =>
  PostData(url.urlCreateInvestPackage, body)
    .then((res) => res)
    .catch((err) => null);

export const updateInvestPackage = async (body) =>
  PostData(url.urlUpdateInvestPackage, body)
    .then((res) => res)
    .catch((err) => null);

export const detailInvestPackage = async (id, body) =>
  GetURL(`${url.urlDetailInvestPackage}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteInvestPackage = async (body) =>
  PostData(url.urlDeleteInvestPackage, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusInvestPackage = async (body) =>
  PostData(url.changeStatusInvestPackage, body)
    .then((res) => res)
    .catch((err) => null);
