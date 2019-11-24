import Request from '~/util/request'

export function fetchFoodTypes() {
    return Request.get('/api/food-types').then(({data, error}) => error ? [] : data.data)
}

export function fetchFoodRegulation(id) {
    return Request.get('/api/food/regulation/' + id).then(({data, error}) => error ? {} : data.data)
}
