import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetUsers = (API) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setUsers(response.data);
    }
    fetchData();
  }, [API]);
  return users;
};

export default useGetUsers;
