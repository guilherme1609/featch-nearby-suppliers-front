import { useState } from 'react'

import '../styles/SidePanelComponent.css'
import DividerComponent from './DividerComponent'
import CustomerSupplier from '../core/CustomerSupplier'
import {FiLogOut} from 'react-icons/fi'

export default function SidePanelComponent(props: any) {

	const [searchTerm, setSearchTerm] = useState('')
	const customerAddresses = props.customerAddresses

	const filterCustomerAddress = (searchTerm: string, customerAddress: CustomerSupplier) => {
		if (searchTerm == "") {
			return customerAddress
		} else if (customerAddress.addressName.toLowerCase().includes(searchTerm.toLowerCase())) {
			return customerAddress
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
						customerAddresses.filter((customerAddress: CustomerSupplier) => filterCustomerAddress(searchTerm, customerAddress))
							.map((customerAddress: CustomerSupplier, key: number) => {
								return (
									<div className='card-container' key={key}>
										<div className='card-content'>
											<p className='card-title'>{customerAddress.addressName}</p>
											<p className='card-info'>{customerAddress.address}</p>
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
					<p id='u-name'>José Geraldo Costa</p>
					<p id='u-email'>jgt.josegeraldo@teste.com.br</p>
					<p id='u-editar'><a href="#">Editar perfil</a></p>
				</div>
				<div className="user-logout">
					<FiLogOut size="1.5em" onClick={()=>props.onLogout()}/>
				</div>
			</div>
		</div>
	)
}
