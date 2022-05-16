import { useContext, createContext, useReducer } from "react";
const UserDetailContext = createContext();
const UserDetailContextProvider = ({ children }) => {
    const reducerFunction = (acc,curr) => {

    }
  const [userState, userDispatch] = useReducer(reducerFunction, {
    isUserLogged: false,
    firstName: "",
    lastName: "",
    archives: [],
    notes: [],
    trash: [],
  });
  return (
    <UserDetailContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserDetailContext.Provider>
  );
};
const useUserDetail = () => useContext(UserDetailContext);
export { UserDetailContextProvider, useUserDetail };
