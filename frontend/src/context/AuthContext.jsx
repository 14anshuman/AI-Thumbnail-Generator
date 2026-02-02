import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axiosInstance from "../config/api"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [isAuthenticated,setIsAuthenticated]=useState(false);


  const navigate=useNavigate();

 

  // 🔄 Fetch logged-in user (on refresh)
  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/api/auth/verify");
    //   console.log(res.data.user);
      
      if(res.data.user){
         setUser(res.data.user);
         setIsAuthenticated(true);
      }
    } catch (err) {
        console.log(err.message);
        
      setUser(null);
    } 
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (email, password) => {
     try {
        const {data}=await axiosInstance.post('/api/auth/login',{email,password})
        if(data.user){
            setUser(data.user)
            setIsAuthenticated(true);
        }
        navigate('/')
        toast.success('Login Successfully')
    } catch (error) {

        console.error(error);
        
    }
  };

  const signup=async(name,email,password)=>{
    try {
        const {data}=await axiosInstance.post('/api/auth/register',{name,email,password})
        if(data.user){
            setUser(data.user)
            setIsAuthenticated(true);
        }
        // navigate('/login');
        toast.success('Registered Successfully')


    } catch (error) {

        console.log(error.message);
        
    }
  }

  const logout = async () => {
     try {
       if( window.confirm("Are you sure you want to Logout?")){
           const {data}=await axiosInstance.post('/api/auth/logout')
        setUser(null);
        setIsAuthenticated(false);
        toast.success(data.message);
       }else{
        return;
       }
        
    } catch (error) {

        console.error(error);
        
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
