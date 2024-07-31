import axios from "axios";

export const apiProcessor = async ({ method, url, data, isPrivate }) => {
  const headers = {
    Authorization: isPrivate ? getAccessJWT() : null,
  }
  try {
    const response = await axios({ method, url, data, headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response?.data && error.response.data || {
      status: "error",
      message: error.message,
    }
  }
}

const getAccessJWT = () => {
  return sessionStorage.getItem('accessJWT');
}