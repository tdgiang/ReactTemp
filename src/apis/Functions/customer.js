/* eslint-disable handle-callback-err */
import { PostData, GetData, GetURL, PostURL, PostFormData } from "../helpers";
import url from "../url";

export const getListCustomers = async (body) =>
  PostData(url.urlListCustomers, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusCustomer = async (body) =>
  PostData(url.changeStatusCustomer, body)
    .then((res) => res)
    .catch((err) => null);

export const detailCustomer = async (id, body) =>
  GetURL(`${url.urlDetailCustomer}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const groupCustomer = async (body) =>
  PostData(url.groupCustomer, body)
    .then((res) => res)
    .catch((err) => null);
export const listInvestCustomer = async (body) =>
  PostData(url.listInvestCustomer, body)
    .then((res) => res)
    .catch((err) => null);

export const listBeLoanCustomer = async (body) =>
  PostData(url.listBeLoanCustomer, body)
    .then((res) => res)
    .catch((err) => null);
export const listContractCustomer = async (body) =>
  PostData(url.listContractCustomer, body)
    .then((res) => res)
    .catch((err) => null);

export const detailContractCustomer = async (body) =>
  PostData(url.detailContractCustomer, body)
    .then((res) => res)
    .catch((err) => null);

export const reportCustomer = async (body) =>
  PostData(url.reportCustomer, body)
    .then((res) => res)
    .catch((err) => null);

export const listBankCustomer = async (body) =>
  PostData(url.listBankCustomer, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusBankCustomer = async (body) =>
  PostData(url.changeStatusBankCustomer, body)
    .then((res) => res)
    .catch((err) => null);

//Preivous

export const addCustomers = async (body) =>
  PostFormData(url.urlAddCustomers, body)
    .then((res) => res)
    .catch((err) => null);

export const updateCustomers = async (id, body) =>
  PostFormData(`${url.urlUpdateCustomer}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteCustomer = async (id, body) =>
  PostData(`${url.urlDeleteCustomer}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);
