/* eslint-disable handle-callback-err */
import {
  PostData,
  GetURL,
  PostHaveKey,
  GetHaveKey,
  GetData,
  PostExportFile,
  PostNonToken,
} from "../helpers";
import url from "../url";

export const getListCredits = async (body, key) =>
  PostHaveKey(url.urlGetListCredits, body, key)
    .then((res) => res)
    .catch((err) => null);

export const lockCredit = async (body) =>
  PostData(url.urlLockCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const unLockCredit = async (body) =>
  PostData(url.urlUnLockCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const assignBranch = async (body) =>
  PostData(url.urlAssignCreditBranch, body)
    .then((res) => res)
    .catch((err) => null);

export const rejectCredit = async (body) =>
  PostData(url.urlRejectCredit, body)
    .then((res) => res)
    .catch((err) => null);

export const decryptData = async (body, key) =>
  PostHaveKey(url.urlDecryptData, body, key)
    .then((res) => res)
    .catch((err) => null);

export const getListRequest = async (body, key) =>
  PostHaveKey(url.listRequest, body, key)
    .then((res) => res)
    .catch((err) => null);

export const acceptRequest = async (body) =>
  PostNonToken(`https://payment.dcvfinance.com/expire.php`, body)
    .then((res) => res)
    .catch((err) => null);

export const listForControl = async (body) =>
  PostData(url.listForControl, body)
    .then((res) => res)
    .catch((err) => null);

export const exportForControl = async (body) =>
  PostExportFile(url.exportForControl, body)
    .then((res) => res)
    .catch((err) => null);
