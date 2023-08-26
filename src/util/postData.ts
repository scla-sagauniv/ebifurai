import { axiosClient } from "./client";

const postData = async (endpoint: string, body: any) => {
  const response = await axiosClient.post(endpoint, body);
  if (response.status == 200) {
    return response.data;
  }
  return undefined;
};

export default postData;
