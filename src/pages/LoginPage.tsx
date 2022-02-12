import '../styles/LoginPage.css'
import { useState } from 'react'
import InputComponent from '../components/InputComponent'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/AuthService'
import AuthRepository from '../core/AuthRepository'
import CheckAuthGuard from '../guard/CheckAuthGuard'

export default function LoginPage() {

	let navigate = useNavigate()

	CheckAuthGuard('/home')

	const serviceAuth: AuthRepository = new AuthService()

	const [values, setValues] = useState<any>({
		email: "",
		password: ""
	})

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "email",
			placeholder: "Digite um e-mail válido",
			label: "E-mail"
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Digite uma senha válida",
			label: "Senha"
		}
	]

	const handleSubmit = (e: any) => {
		e.preventDefault()
	}

	const onChange = (e: any) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const setLocalStorage = (auth: any) => {
		localStorage.setItem('auth', `Bearer ${auth.token}`)
	}

	const login = (userLogin: any) => {
		serviceAuth.makeLogin(userLogin)
			.then((res) => {
				setLocalStorage(res)
			})
			.then(() => navigate('/home'))
			.catch(() => navigate('/'))
	}

	return (
		<div className='login'>
			<div className='login-box'>
				<div className='login-info'>
					<h1>Login</h1>
					<p>Seja Bem vindo!</p>
					<p>Aqui você encontra a entrega mais rápida para o seu pedido</p>
				</div>
				<div className='login-form'>
					<form onSubmit={handleSubmit}>
						{inputs.map(input => (
							<InputComponent
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange}
							/>
						))}
						<div className='login-action'>
							<button className='bt-default' onClick={() => login(values)}>LOGIN</button>
						</div>
					</form>
				</div>
				<div className='login-footer'>
					<span className='label-footer'>Novo usuário? <a href="#">Cadastre-se</a></span>
					<span className='label-footer'>Esqueceu a senha? <a href='#'>Click aqui!</a></span>
				</div>
			</div>
		</div>
	)
}
