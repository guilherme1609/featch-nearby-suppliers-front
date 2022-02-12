import CustomerSupplier from "./CustomerSupplier";

export default interface CustomerSuppliersRepository {
	fetchAllNearbySuppliers(): Promise<CustomerSupplier[]>
}
