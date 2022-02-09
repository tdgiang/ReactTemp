/* eslint-disable handle-callback-err */
import { PostData, GetData, GetURL } from "../helpers";
import url from "../url";

export const getDropDownGroup = async (body) =>
  GetData(url.urlDropdownGroup, body)
    .then((res) => res)
    .catch((err) => null);

export const getDropDownInvestType = async (body) =>
  GetData(url.urlDropdownInvestType, body)
    .then((res) => res)
    .catch((err) => null);

export const getDropDownInvestAction = async (id, body) =>
  GetURL(`${url.urlDropdownInvestAction}/${id}`, body)
    .then((res) => res)
    .catch((err) => null);

export const getDropDownStatusCard = async (body) =>
  GetData(url.urlDropdownStatusCard, body)
    .then((res) => res)
    .catch((err) => null);

export const getDropDownBranch = async (body) =>
  GetData(url.urlDropdownBranch, body)
    .then((res) => res)
    .catch((err) => null);
export const getDropDownStatusTrans = async (body) =>
  GetData(url.urlDropdownStatusTrans, body)
    .then((res) => res)
    .catch((err) => null);

export const dropdownConfigTypePoint = async (body) =>
  GetData(url.dropdownConfigTypePoint, body)
    .then((res) => res)
    .catch((err) => null);

export const getListDropdownEvent = async (body) =>
  GetData(url.urlDropdownEvent, body)
    .then((res) => res)
    .catch((err) => null);

export const dropdownReqStatus = async (body) =>
  GetData(url.dropdownReqStatus, body)
    .then((res) => res)
    .catch((err) => null);

export const dropdownTransStatus = async (body) =>
  GetData(url.dropdownTransStatus, body)
    .then((res) => res)
    .catch((err) => null);

export const dropDownModuleType = async (body) =>
  GetData(url.dropDownModuleType, body)
    .then((res) => res)
    .catch((err) => null);
export const dropdownListPackage = async (body) =>
  GetData(url.dropdownListPackage, body)
    .then((res) => res)
    .catch((err) => null);

export const dropdownContractType = async (body) =>
  GetData(url.dropdownContractType, body)
    .then((res) => res)
    .catch((err) => null);
export const dropdwonSourceCard = async (body) =>
  GetData(url.dropdwonSourceCard, body)
    .then((res) => res)
    .catch((err) => null);

export const dropdwonFuntions = async (body) =>
  GetData(url.dropdwonfuntions, body)
    .then((res) => res)
    .catch((err) => null);
export const dropdwonEvent = async (body) =>
  GetData(url.dropdwonEvent, body)
    .then((res) => res)
    .catch((err) => null);
export const dropDownActionAgent = async (body) =>
  GetData(url.dropDwonActionAgent, body)
    .then((res) => res)
    .catch((err) => null);

export const dropdownModule = async (body) =>
  GetData(url.urlgetListModuleDropdown, body)
    .then((res) => res)
    .catch((err) => null);
export const dropDwonApproveStatus = async (body) =>
  GetData(url.dropDwonApproveStatus, body)
    .then((res) => res)
    .catch((err) => null);

export const dropDownUserApprove = async (body) =>
  GetData(url.dropDownUserApprove, body)
    .then((res) => res)
    .catch((err) => null);

export const dropDownBank = async (body) =>
  GetData(url.dropDownBank, body)
    .then((res) => res)
    .catch((err) => null);
