import {all} from 'redux-saga/effects'

function* helloSaga() {
    console.log('hello sage')
}

export default function* rootSaga() {
    console.log('root sage');
    yield all([helloSaga()])
}