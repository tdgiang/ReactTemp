/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";

export const getListEventType = async (body) =>
  PostData(url.urlGetListEventType, body)
    .then((res) => res)
    .catch((err) => null);

export const createEventType = async (body) =>
  PostData(url.urlCreateEventType, body)
    .then((res) => res)
    .catch((err) => null);

export const updateEventType = async (body) =>
  PostData(url.urlUpdateEventType, body)
    .then((res) => res)
    .catch((err) => null);

export const detailEventType = async (id, body) =>
  GetURL(`${url.urlDetailEventType}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteEventType = async (body) =>
  PostData(url.urlDeleteEventType, body)
    .then((res) => res)
    .catch((err) => null);
export const changeStatusEventType = async (body) =>
  PostData(url.changeStatusEventType, body)
    .then((res) => res)
    .catch((err) => null);
