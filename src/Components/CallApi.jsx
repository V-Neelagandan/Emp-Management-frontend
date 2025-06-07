import { useState, useEffect } from "react";
import axios from "axios";

const CallApi = () => {
  const [data, setData] = useState([]);
  const fetchData = async (url = "", method = "get", body = "", id = NaN) => {
    try {
      if (id && method === "delete") {
        url = `${url}/${id}`;
        const response = await axios.delete(url);
        setData(response.data);
        return response.data;
      } else if (id && body != null && method == "put") {
        url = url + id;
        const response = await axios.put(url, body);
        setData(response.data);
      } else if (body != null && method == "post") {
        const response = await axios.post(url, body);
        setData(response.data);
      } else if (method == "get") {
        const response = await axios.get(url);
        setData(response.data);
      }
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };
  return { data, fetchData };
};

export default CallApi;
