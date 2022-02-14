import { useState } from 'react'

import '../styles/SidePanelComponent.css'
import DividerComponent from './DividerComponent'
import CustomerSupplierAddress from '../core/CustomerSupplierAddress'
import {FiLogOut} from 'react-icons/fi'

export default function SidePanelComponent(props: any) {

	const [searchTerm, setSearchTerm] = useState('')
	const customerAddresses = props.customerAddresses
	const {name, email} = props.userData

	const filterCustomerAddress = (searchTerm: string, customerSupplierAddress: CustomerSupplierAddress) => {
		if (searchTerm == "") {
			return customerSupplierAddress
		} else if (customerSupplierAddress.name.toLowerCase().includes(searchTerm.toLowerCase())) {
			return customerSupplierAddress
		}
	}

	return (
		<div className='side-panel'>
			<div className='search-section'>
				<input type="text" placeholder='Pesquisar endereço...' onChange={event => { setSearchTerm(event.target.value) }} />
			</div>
			<DividerComponent />
			<div className='addresses-section'>
				{
					customerAddresses && customerAddresses.length ?
						customerAddresses.filter((customerAddress: CustomerSupplierAddress) => filterCustomerAddress(searchTerm, customerAddress))
							.map((customerAddress: CustomerSupplierAddress, key: number) => {
								return (
									<div className='card-container' key={key}>
										<div className='card-content'>
											<p className='card-title'>{customerAddress.name}</p>
											<p className='card-info'>{customerAddress.customer.address}</p>
										</div>
										<div className='card-actions'>
											<button onClick={() => console.log('Editar!')} className='bt-edit'>Editar</button>
											<button onClick={() => props.onSelectCustomerAddress(customerAddress)} className='bt-choose-address'>Definir endereço</button>
										</div>
									</div>
								)
							})
						: [0].map((val: number, key: number) => {
							return (
								<div key={key}>
									<br />
									<p>Nenhum endereço cadastrado!</p>
								</div>
							)
						})
				}
			</div>
			<DividerComponent />
			<div className='user-section'>
				<div className='user-foto'>
					<img src="https://randomuser.me/api/portraits/thumb/men/36.jpg"/>
				</div>
				<div className="user-info">
					<p id='u-name'>{name}</p>
					<p id='u-email'>{email}</p>
					<p id='u-editar'><a href="#">Editar perfil</a></p>
				</div>
				<div className="user-logout">
					<FiLogOut size="1.5em" onClick={()=>props.onLogout()}/>
				</div>
			</div>
		</div>
	)
}
