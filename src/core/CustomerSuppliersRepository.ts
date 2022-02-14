import CustomerSupplierAddress from "./CustomerSupplierAddress";

export default interface CustomerSuppliersRepository {
	fetchAllNearbySuppliers(): Promise<CustomerSupplierAddress[]>
}
