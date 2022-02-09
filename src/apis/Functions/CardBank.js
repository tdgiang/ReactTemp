/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const listTypeCredit = async (body) =>
  PostData(url.listTypeCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const createTypeCredit = async (body) =>
  PostData(url.createTypeCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const updateTypeCredit = async (body) =>
  PostData(url.updateTypeCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const detailTypeCredit = async (id, body) =>
  GetURL(`${url.detailTypeCredit}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteTypeCredit = async (body) =>
  PostData(url.deleteTypeCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusTypeCredit = async (body) =>
  PostData(url.changeStatusTypeCredit, body)
    .then((res) => res)
    .catch((err) => null);

//Bank
export const listBank = async (body) =>
  PostData(url.listBank, body)
    .then((res) => res)
    .catch((err) => null);

export const createBank = async (body) =>
  PostData(url.createBank, body)
    .then((res) => res)
    .catch((err) => null);

export const updateBank = async (body) =>
  PostData(url.updateBank, body)
    .then((res) => res)
    .catch((err) => null);

export const detailBank = async (id, body) =>
  GetURL(`${url.detailBank}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteBank = async (body) =>
  PostData(url.deleteBank, body)
    .then((res) => res)
    .catch((err) => null);
