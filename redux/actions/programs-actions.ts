/**
 * @author: ntwari egide, ntwariegide2@gmail.com
 * @description: schools actions
 */

import axios from "axios"
import { headers } from "../../constants/headers"
import { store } from "../store"
import * as actionTypes from "./action-types"

export const getallschools = async () => {

    const url = '/schools'

    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            store.dispatch({
                type: actionTypes.GET_ALL_SCHOOLS,
                payload: res.data.payload.data
            })
        })
    } catch (error) {
        console.log('Error: ',error)   
    }


}