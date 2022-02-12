import axios from "axios";
import Auth from "../core/Auth";
import AuthRepository from "../core/AuthRepository";

export default class AuthService implements AuthRepository {

	makeLogin(userLogin: any): Promise<any> {
		const api = process.env.REACT_APP_API || ''
		return axios.post(`${api}/auth/login`, userLogin)
			.then(({ data }) => data)
			.then(({ token }) => token)
			.then(({ original }) => original)
			.catch(err => console.log(err))
	}

	getMe(): Promise<Auth> {
		const api = process.env.REACT_APP_API || ''
		const authToken = localStorage.getItem('auth') || ''
		return axios.get(`${api}/auth/me`, { headers: { 'Authorization': authToken } })
			.then(({ data }) => data)
			.then(({ data }) => data)
			.catch(err => console.log(err))
	}

	logOut(): Promise<any> {
		const api = process.env.REACT_APP_API || ''
		const authToken = localStorage.getItem('auth') || ''
		return axios.post(`${api}/auth/logout`, {}, {headers: {'Authorization': authToken}})
					.then(({data}) => data)
					.catch(e => console.log(e))
	}
}
