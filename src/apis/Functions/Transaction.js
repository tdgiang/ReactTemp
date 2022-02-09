/* eslint-disable handle-callback-err */
import { PostData, GetURL, GetData, PostHaveKey } from "../helpers";
import url from "../url";

export const getListTrans = async (body) =>
  PostData(url.urlListTranstion, body)
    .then((res) => res)
    .catch((err) => null);

export const acceptTrans = async (id, body) =>
  GetURL(`${url.urlAcceptTranstion}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deniedTrans = async (id, body) =>
  GetURL(`${url.urlDeniedTranstion}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const finishTrans = async (id, body) =>
  GetURL(`${url.urlFinishTrans}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const detailTrans = async (id, body) =>
  GetURL(`${url.urlDetailTranction}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const getListCustomerTrans = async (body) =>
  PostData(url.listCustomerTrans, body)
    .then((res) => res)
    .catch((err) => null);
export const acceptCustomerTrans = async (id) =>
  GetURL(`${url.acceptCustomerTrans}/${id}`, {})
    .then((res) => res)
    .catch((err) => null);

export const finishCustomerTrans = async (id) =>
  GetURL(`${url.finishCustomerTrans}/${id}`, {})
    .then((res) => res)
    .catch((err) => null);

export const rejectTrans = async (id) =>
  GetURL(`${url.rejectTrans}/${id}`, {})
    .then((res) => res)
    .catch((err) => null);
export const restoreTrans = async (id) =>
  GetURL(`${url.restoreTrans}/${id}`, {})
    .then((res) => res)
    .catch((err) => null);

export const getListGatePayment = async (body) =>
  GetData(`https://payment.dcvfinance.com/listHistoryPayment.php`, body)
    .then((res) => res)
    .catch((err) => null);
