const initialState = {
    item: [],
    isLoading: false,
    error: null
}

const news = (state =  initialState, action) => {
    switch (action.type){
        case 'GET_NEWS_PENDING':
            return{
                ...state,
                item: null,
                isLoading: true
            }
        case 'GET_NEWS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                item: action.payload.data.articles
            }
        case 'GET_NEWS_REJECTED':
            return{
                ...state,
                isLoading: false,
                error: payload.message
            }
        default:
            return state
    }
}

export default news