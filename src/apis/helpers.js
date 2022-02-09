import axios from "axios";
import KEY from "../assets/Key";
axios.defaults.timeout = 10000;
export async function GetData(url, data) {
  const token = localStorage.getItem(KEY.API_TOKEN);

  let myRequest = {
    method: "get",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    params: {
      ...data,
    },
    timeout: 30 * 1000,
    // withCredentials: true,
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function PostHaveKey(url, json, key) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      "X-SECRET-KEY": key,
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function GetHaveKey(url, data, key) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "get",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      "X-SECRET-KEY": key,
    },
    timeout: 30 * 1000,
    params: {
      ...data,
    },
    // withCredentials: true,
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function GetURL(url, data) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "get",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    timeout: 30 * 1000,
    params: {
      ...data,
    },
    // withCredentials: true,
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function PostLogin(url, json) {
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      const err = {
        message: "error",
        status: error.request.status,
      };
      return err;
    });
}

export async function PostData(url, json, isAuth = true) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function PostURL(url) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    timeout: 30 * 1000,
  };
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function PostFormData(url, data) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
    timeout: 30 * 1000,
    data: data,
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}

export async function PostExportFile(url, json, isAuth = true) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  return await axios(myRequest)
    .then(function (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `ApprovePayments_${json.from_date}_${json.to_date}.xls`
      ); //or any other extension
      document.body.appendChild(link);
      link.click();
      return {
        data: {
          code: 200,
        },
      };
    })
    .catch((error) => {
      console.log("error", error);
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 400,
        },
      };
      return err;
    });
}

export async function PostNonToken(url, json, isAuth = true) {
  const token = localStorage.getItem(KEY.API_TOKEN);
  let myRequest = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log("My request", myRequest);
  return await axios(myRequest)
    .then((response) => response)
    .then((response) => response)
    .catch((error) => {
      const err = {
        message: "error",
        status: error.request.status,
        data: {
          code: 401,
        },
      };
      return err;
    });
}
