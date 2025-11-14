import axios from 'axios'

export async function register(fname, lname, email, mobile, dob, password){
    try{
        const url = "http://localhost:4000/signUp";

        const body = {
            "first_name" : fname,
            "last_name" : lname,
            "email" : email,
            "mobile" : mobile,
            "birth" : dob,
            "password" : password
        }

        const response = await axios.post(url, body)

        return response.data
    }
    catch(ex){
        console.log("Exception : " + ex)
    }
}

export async function login(email, password){
    try{
        const url = "http://localhost:4000/signIn"

        const body = {
            "email" : email,
            "password" : password
        }

        const response = await axios.post(url, body)

        return response.data
    }
    catch(ex){
        console.log("Exception : " + ex)
    }
}
