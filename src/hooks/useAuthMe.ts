import { useEffect, useState } from "react";
import Auth from "../core/Auth";
import AuthRepository from "../core/AuthRepository";
import AuthService from "../services/AuthService";

export default function useAuthMe() {
	const serviceAuth: AuthRepository = new AuthService()
	const [userData, setUserData] = useState<Auth>()

	useEffect(getMe, [])

	function getMe() {
		serviceAuth.getMe()
				   .then(data => {setUserData(data)})
				   .catch(err => console.log(err))
	}

	return {
		userData,
		getMe
	}
}
