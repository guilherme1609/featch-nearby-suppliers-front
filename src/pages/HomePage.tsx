import MapComponent from '../components/MapComponent'
import SidePanelComponent from '../components/SidePanelComponent'

import '../styles/HomePage.css'
import CheckAuthGuard from '../guard/CheckAuthGuard'
import useNearbySuppliers from '../hooks/useNearbySuppliers'
import { useEffect, useState } from 'react'
import CustomerSupplier from '../core/CustomerSupplier'
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

	CheckAuthGuard('/home')
	let navigate = useNavigate()
	const { customerSuppliers } = useNearbySuppliers()
	const [suppliers, setSuppliers] = useState([])
	const [customerAddressData, selectCustomerAddress] = useState({})

	const authService = new AuthService()

	const getAllSuppliers = (customerSuppliers: any) => {
		let arrSuppliers: any = []
		customerSuppliers.forEach((val: any) => {
			arrSuppliers.push(...val.suppliers)
		})

		let arrUniqueSuppliers: any = []
		arrSuppliers.forEach((val: any) => {
			arrUniqueSuppliers[val.id] = val
		})

		let arrPretySuppliers: any = []
		arrUniqueSuppliers.forEach((val: any) => {
			arrPretySuppliers.push(val)
		})
		return arrPretySuppliers
	}

	const logOut = () => {
		authService.logOut()
			.then(data => {
				if (data.status === 'success') {
					navigate('/')
				}
			})
	}

	useEffect(() => {
		setSuppliers(getAllSuppliers(customerSuppliers))
	}, [customerSuppliers])

	return (
		<div className='wrapper'>
			<nav className='sidebar'>
				{/* Component search addresses */}
				{/* <div className='sidebar-content'> */}
				<SidePanelComponent
					customerAddresses={customerSuppliers}
					onSelectCustomerAddress={
						(customerAddress: CustomerSupplier) => selectCustomerAddress(customerAddress)
					}
					onLogout={() => logOut()}
				/>
				{/* </div> */}
			</nav>
			<main className='main_content'>
				<MapComponent
					suppliers={suppliers}
					customerAddressData={customerAddressData}
				/>
			</main>
		</div>
	)
}
