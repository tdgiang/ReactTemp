/* eslint-disable handle-callback-err */
import { PostData, GetURL, GetData } from "../helpers";
import url from "../url";

export const getListEvent = async (body) =>
  PostData(url.urlEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const createEvent = async (body) =>
  PostData(url.urlCreateEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const updateEvent = async (body) =>
  PostData(url.urlUpdateEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const detailEvent = async (id, body) =>
  GetURL(`${url.urlGetListEvent}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteEvent = async (body) =>
  PostData(url.urlDeleteEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusEvent = async (body) =>
  PostData(url.changeStatusEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const getListModulePicker = async (body) =>
  GetData(url.urlDropModule, body)
    .then((res) => res)
    .catch((err) => null);

export const getListEventTypePicker = async (body) =>
  GetData(url.urlDropEventType, body)
    .then((res) => res)
    .catch((err) => null);

export const listRank = async (body) =>
  PostData(url.listRank, body)
    .then((res) => res)
    .catch((err) => null);

export const createRank = async (body) =>
  PostData(url.createRank, body)
    .then((res) => res)
    .catch((err) => null);

export const updateRank = async (body) =>
  PostData(url.updateRank, body)
    .then((res) => res)
    .catch((err) => null);

export const detailRank = async (id, body) =>
  GetURL(`${url.detailRank}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteRank = async (body) =>
  PostData(url.deleteRank, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusRank = async (body) =>
  PostData(url.changeStatusRank, body)
    .then((res) => res)
    .catch((err) => null);
export const dataRank = async (id, body) =>
  GetData(`${url.dataRank}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);
