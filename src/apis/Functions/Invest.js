/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListTypeInvest = async (body) =>
  PostData(url.urlGetListTypeInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const createTypeInvest = async (body) =>
  PostData(url.urlCreateTypeInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const updateTypeInvest = async (body) =>
  PostData(url.urlUpdateTypeInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const detailTypeInvest = async (id, body) =>
  GetURL(`${url.urlDetailTypeInvest}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteTypeInvest = async (body) =>
  PostData(url.urlDeleteTypeInvest, body)
    .then((res) => res)
    .catch((err) => null);
export const changeStatusTypeInvest = async (body) =>
  PostData(url.changeStatusTypeInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const getListActionInvest = async (body) =>
  PostData(url.urlGetListActionInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const createActionInvest = async (body) =>
  PostData(url.urlCreateActionInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const updateActionInvest = async (body) =>
  PostData(url.urlUpdateActionInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const detailActionInvest = async (id, body) =>
  GetURL(`${url.urlDetailActionInvest}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteActionInvest = async (body) =>
  PostData(url.urlDeleteActionInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusActionInvest = async (body) =>
  PostData(url.changeStatusActionInvest, body)
    .then((res) => res)
    .catch((err) => null);

export const getListHistoryInvest = async (body) =>
  PostData(url.urlGetListHistoryInvest, body)
    .then((res) => res)
    .catch((err) => null);
export const createHistoryInvest = async (body) =>
  PostData(url.urlCreateHistoryInvest, body)
    .then((res) => res)
    .catch((err) => null);
