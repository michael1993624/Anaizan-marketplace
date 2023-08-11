import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_URL = "";

//login
export const userLogin = createAsyncThunk (
    'user/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            //configure header's content type as json
            const config = {
                headers: {
                    'Content-Type':'application/json',
                },
            }

            const { data } = await axios.post(
                `${API_URL}/login`,
                { email, password },
                config
            )

            localStorage.setItem('userToken', data.userToken)

            return data
        } catch (error) {
            //return custom error message from API if any
            if (error.message && error.response.data.message) {
                console.log (error.response.data.message)
            } else {
                console.log (error.message)
                return rejectWithValue(error.message)
            }
        }
    }
)

//register
export const userRegister = createAsyncThunk (
    'user/register',
    async ({ roll, fullname, country, tel, company, email, password },
        {rejectWithValue}) => {
            try {
                const config = {
                    headers: {
                        'Content-Type':'application/json',
                    },
                }

                await axios.post(
                    `${API_URL}/register`,
                    { roll, fullname, country, tel, company, email, password },
                    config
                )
            } catch (error) {
                if (error.message && error.response.data.message) {
                    console.log (error.response.data.message)
                    return rejectWithValue(error.response.data.message)
                } else {
                    console.log ("okay")
                    return rejectWithValue (error.message)
                }
            }
        }
)