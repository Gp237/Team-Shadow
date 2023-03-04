import axios from "../../baseUrl";

//---------------------------- UPLOAD IMAGE SERVICE-------------------------------//
const uploadImage = (token, data) => {
  return axios.post(`/image`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
//---------------------------- DELETE IMAGE SERVICE-------------------------------//
const deleteImage = (token, data) => {
  console.log(data);
  return axios.delete(`/image/destroy`, {
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });
};

const PublicServices = {
  uploadImage,
  deleteImage,
};
export default PublicServices;
