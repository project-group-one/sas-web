import Cookies from 'js-cookie'

const checkAuth = () => !!Cookies.get('SESSION')

export { checkAuth }
