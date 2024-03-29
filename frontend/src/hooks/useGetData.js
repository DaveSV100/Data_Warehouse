import { useEffect, useState } from 'react';
import endPoints from '@services/api';
import axios from 'axios';

//This hook is used to get de data of any endpoint
const useGetData = (API) => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get(API);
    setData(response.data);
  }

  useEffect(() => {
    try {
      getData();
    } catch(error) {
      console.error(error);
    }
  }, []);

  return data;
}

export default useGetData;

// const useGetUsers = (API) => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios(API);
//       setUsers(response.data);
//     }
//     fetchData();
//   }, [API]);
//   return users;
// };
// export default useGetUsers;
