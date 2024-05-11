
import * as AuthApi from '../Api/AuthRequest'
import { useNavigate } from 'react-router-dom';


import { jwtDecode } from 'jwt-decode';

export const logIn = (formData, navigate) => async (dispatch) => {
    dispatch({type: "AUTH_START"});

    try {
        const { data } = await AuthApi.logIn(formData); 
        const user = jwtDecode(data.access_token);
        dispatch({type: "AUTH_SUCCESS", data: user});
        console.log(user.role);

        // Navigate based on the user's role
        if (user.role === 'STUDENT') {
            navigate(`/student-home/${user.userId}`);  // Correct usage of template literal
        } else if (user.role === 'INSTRUCTOR') {
            navigate(`/instructor-home/${user.userId}`); // Correct usage of template literal
        }
    } catch (error) {
        console.log(error);
        dispatch({type: "AUTH_FAIL"});
    }
}

export const signUp =(formData)=> async(dispatch)=>{
    

    dispatch({type: "AUTH_START"})

    try {
        const { data } = await AuthApi.signUp(formData) 
        
       const user = jwtDecode(data.access_token);
        dispatch({type: "AUTH_SUCCESS", data: user});
       console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAIL"})

    }
    
}

export const logout =()=> async(dispatch)=> {
    dispatch({type: "LOG_OUT"})


}