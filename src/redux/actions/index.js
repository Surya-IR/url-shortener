import { ADD_HIST } from "../constants/constants"

export function AddHist(payload){
    return{type: ADD_HIST, payload}
}