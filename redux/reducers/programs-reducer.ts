/**
 * @author: ntwari egide, ntwariegide2@gmail.com
 * @description: schools actions
 */

import * as actionTypes from "../actions/action-types"

const initialprogramsstate : any[] = []

export const schoolsReducer = ( state = initialprogramsstate, action: any) => {

    switch (action.type) {
        case actionTypes.GET_ALL_SCHOOLS:
            
            return action.payload
     
        default:
            return state;
    }

}