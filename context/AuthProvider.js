import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Alert } from "react-native";





const AuthContext = createContext();
export default function AuthProvider({ children }) {
    // const [authState,authDispatch]=useReducer(auth,authStates)
    const [userData, setUserData] = useState({
        name: '',
        token: '',
        phone: ''
    })
    const [loading, setLoading] = useState(false);
    const signUpUser = (name, phone, password, age, gender)=>  {
       console.log("here works!!!0");
       
    }

    const login = async () => {

    }
 

    const signOut = async () => {

    }
    const console = () => {
        console.log("this is fucking console only")
    }

   

    return (
        <>
            <AuthContext.Provider value={{ userData, loading, signOut, signUpUser: signUpUser, login ,console}}  >
                {children}
            </AuthContext.Provider>
        </>


    )
}
export const useAuth = () => useContext(AuthContext)