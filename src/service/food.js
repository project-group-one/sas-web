import Request from '~/util/request'

export function fetchFoodTypes() {
    return Request.get('/api/food-types').then(({data, error}) => error ? [] : data)
}
