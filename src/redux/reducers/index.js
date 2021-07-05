const urlHist = {
    urlHistory: []
}

function rootReducer( state = urlHist ,action){
   if(action.type === 'ADD_HIST'){
    Object.assign({}, state, {
        urlHistory: state.urlHistory.push(action.payload)
    })
   }
    return state
}

export default rootReducer