import React, { createContext, useEffect, useState } from 'react';
import { getProductTask  } from './api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const GetApi = async () => {
      const userData = await getProductTask();
      setProduct(userData.products);
    };

    GetApi();

    
  }, []);


  const values = {
    product
};

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
