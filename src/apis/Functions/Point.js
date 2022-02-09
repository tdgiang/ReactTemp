/* eslint-disable handle-callback-err */
import { PostData, GetURL } from "../helpers";
import url from "../url";
//type point
export const pointConfigType = async (body) =>
  PostData(url.pointConfigType, body)
    .then((res) => res)
    .catch((err) => null);

export const createPointConfigType = async (body) =>
  PostData(url.createPointConfigType, body)
    .then((res) => res)
    .catch((err) => null);

export const updatePointConfigType = async (body) =>
  PostData(url.updatePointConfigType, body)
    .then((res) => res)
    .catch((err) => null);

export const detailPointConfigType = async (id, body) =>
  GetURL(`${url.detailPointConfigType}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deletePointConfigType = async (body) =>
  PostData(url.deletePointConfigType, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusPointConfigType = async (body) =>
  PostData(url.changeStatusPointConfigType, body)
    .then((res) => res)
    .catch((err) => null);

//Point
export const pointConfig = async (body) =>
  PostData(url.pointConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const createPointConfig = async (body) =>
  PostData(url.createPointConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const updatePointConfig = async (body) =>
  PostData(url.updatePointConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const detailPointConfig = async (id, body) =>
  GetURL(`${url.detailPointConfig}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deletePointConfig = async (body) =>
  PostData(url.deletePointConfig, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusPointConfig = async (body) =>
  PostData(url.changeStatusPointConfig, body)
    .then((res) => res)
    .catch((err) => null);
