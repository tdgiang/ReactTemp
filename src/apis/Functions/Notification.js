/* eslint-disable handle-callback-err */
import { PostData, GetURL, GetData } from "../helpers";
import url from "../url";

export const getListNotification = async (body) =>
  PostData(url.urlGetListNotification, body)
    .then((res) => res)
    .catch((err) => null);

export const createNotification = async (body) =>
  PostData(url.urlCreateNotification, body)
    .then((res) => res)
    .catch((err) => null);

export const updateNotification = async (body) =>
  PostData(url.urlUpdateNotification, body)
    .then((res) => res)
    .catch((err) => null);

export const detailNotification = async (id, body) =>
  GetURL(`${url.urlDetailNotification}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteNotification = async (body) =>
  PostData(url.urlDeleteNotification, body)
    .then((res) => res)
    .catch((err) => null);

export const getListObjectPicker = async (body) =>
  GetData(url.urlgetListObjectType, body)
    .then((res) => res)
    .catch((err) => null);

export const getListNotificationPicker = async (body) =>
  GetData(url.urlgetListNotifcationType, body)
    .then((res) => res)
    .catch((err) => null);

export const getListModulePicker = async (body) =>
  GetData(url.urlgetListModuleDropdown, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusNotification = async (body) =>
  PostData(url.changeStatusNotification, body)
    .then((res) => res)
    .catch((err) => null);
