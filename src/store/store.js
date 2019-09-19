import { createStore, combineReducers, applyMiddleware} from 'redux'

import news from './reducers/news'

import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const reducers = combineReducers ({
    news
})

const store = createStore(
    reducers,
    applyMiddleware(logger, promise)
)

export default store