/* eslint-disable handle-callback-err */
import { PostData, GetData, GetURL } from "../helpers";
import url from "../url";

export const getListBanner = async (body) =>
  PostData(url.urlBanner, body)
    .then((res) => res)
    .catch((err) => null);

export const createBanner = async (body) =>
  PostData(url.urlCreateBanner, body)
    .then((res) => res)
    .catch((err) => null);

export const updateBanner = async (body) =>
  PostData(url.urlUpdateBanner, body)
    .then((res) => res)
    .catch((err) => null);

export const detailBanner = async (id, body) =>
  GetURL(`${url.urlGetListBanner}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const deleteBanner = async (body) =>
  PostData(url.urlDeleteBanner, body)
    .then((res) => res)
    .catch((err) => null);

export const getListDropdownEvent = async (body) =>
  GetData(url.urlDropdownEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const getListDropdownModule = async (body) =>
  GetData(url.urlgetListModuleDropdown, body)
    .then((res) => res)
    .catch((err) => null);

export const changeStatusBanner = async (body) =>
  PostData(url.changeStatusBanner, body)
    .then((res) => res)
    .catch((err) => null);
