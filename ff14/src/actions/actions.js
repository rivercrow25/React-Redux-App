import axios from 'axios'

export const getData = () => dispatch => {
    axios.get('https://cors-anywhere.herokuapp.com/https://ghibliapi.herokuapp.com/films')
        .then(response => {
            dispatch({ type: 'GET_DATA', payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: 'FAILED', payload: 'status 404, Item not found' })
        })
}

export const getInfo = (url) => dispatch => {
    dispatch({ type: 'GET_INFO', payload: url })
}