/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListNotificationType = async (body) =>
  PostData(url.urlNotificationType, body)
    .then((res) => res)
    .catch((err) => null);

export const createNotificationType = async (body) =>
  PostData(url.urlCreateNotificationType, body)
    .then((res) => res)
    .catch((err) => null);

export const updateNotificationType = async (body) =>
  PostData(url.urlUpdateNotificationType, body)
    .then((res) => res)
    .catch((err) => null);

export const detailNotificationType = async (id, body) =>
  GetURL(`${url.urlGetListNotificationType}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteNotificationType = async (body) =>
  PostData(url.urlDeleteNotificationType, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusTypeNotification = async (body) =>
  PostData(url.changeStatusTypeNotification, body)
    .then((res) => res)
    .catch((err) => null);
