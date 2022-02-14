import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import '../styles/MapComponent.css'
// import Supplier from '../core/CustomerSupplierAddress'
// import CustomerAddress from '../core/CustomerAddress'
import CustomerSupplierAddress from '../core/CustomerSupplierAddress'
import Supplier from '../core/Supplier'

const MapComponent = (props: any) => {

	// All suppliers of all customer addresses
	const initialState = [...props.suppliers]
	const customerAddressSelected = props.customerAddressData
	let suppliers: any = []

	if (customerAddressSelected && customerAddressSelected.suppliers && customerAddressSelected.suppliers.length > 0) {
		suppliers = [customerAddressSelected.customer,...customerAddressSelected.suppliers]
		// suppliers = [...customerAddressSelected.suppliers]
	} else {
		suppliers = initialState
	}

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_MAP_KEY || 'AIzaSyDOxDyI_1lZbO8NRLuYsQQsTO0fuMLSPHE'
	})

	const getCentralPosition = (suppliers: any) => {
		if (typeof suppliers === 'object' && suppliers.length > 0) {
			return {
				lat: parseFloat(suppliers[0].lat),
				lng: parseFloat(suppliers[0].long)
			}
		}
		return {
			lat: -25.4487700,
			lng: -49.3039300
		}
	}

	const [map, setMap] = React.useState(null)

	return (
		<div className="map">
			{
				isLoaded ? (
					<GoogleMap
						mapContainerStyle={{ width: '100%', height: '100%' }}
						center={getCentralPosition(suppliers)}
						zoom={13}
					/* onLoad={onLoad}
					onUnmount={onUnmount} */
					>
						{
							suppliers && suppliers.length ?
								suppliers.map((supplier: Supplier, key: number) => {
									return (
										<div key={key}>
											<Marker position={{
												lat: parseFloat(supplier.lat),
												lng: parseFloat(supplier.long)
											}} options={{
												label: {
													text: supplier.name,
													color: "white",
													className: "map-marker"
												},
											}} />
										</div>
									)
								}) : []
						}
						{ /* Child components, such as markers, info windows, etc. */}
						<></>
					</GoogleMap>
				) : <></>
			}
		</div>
	)
}

export default MapComponent
