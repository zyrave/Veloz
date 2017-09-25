export interface Customer {
    id: number,
    name: string,
    address: string,
    city: string,
    phone: string,
    email: string,
    socialId: string,
    isCorporate: boolean,
    isActive: boolean,
    createDate: string,
    lastUpdate: string
}

export interface SaveCustomer {
    id: number,
    name: string,
    address: string,
    city: string,
    phone: string,
    email: string,
    socialId: string,
    isCorporate: boolean,
    isActive: boolean
}
