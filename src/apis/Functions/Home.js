/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const adminCommon = async (body) =>
  GetURL(url.adminCommon, body)
    .then((res) => res)
    .catch((err) => null);

export const dashboardTable = async (id, body) =>
  GetURL(`${url.dashboardTable}`, body)
    .then((res) => res)
    .catch((err) => null);

export const adminAnalyst = async (id, body) =>
  GetURL(`${url.adminAnalyst}`, body)
    .then((res) => res)
    .catch((err) => null);
export const epaytrans = async (body) =>
  PostData(url.epaytrans, body)
    .then((res) => res)
    .catch((err) => null);
