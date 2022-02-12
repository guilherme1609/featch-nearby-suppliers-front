import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthRepository from "../core/AuthRepository"
import AuthService from "../services/AuthService"

export default function CheckAuthGuard(navigateTo: string) {
	let navigate = useNavigate()

	const serviceAuth: AuthRepository = new AuthService()

	const checkLogin = () => {
		return serviceAuth.getMe()
			.then((data) => data)
	}

	useEffect(() => {
		checkLogin()
			.then((data) => {
				if (data && data.id) {
					navigate(navigateTo)
				} else {
					navigate('/')
				}
			})
			.catch(err => {
				console.log(err)
				navigate('/')
			})
	}, [])
}
