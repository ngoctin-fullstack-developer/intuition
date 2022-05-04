export interface IProvice {
    name: string,
    code: number,
    codename: string,
    phone_code: number
}
export interface IDistrict {
    code: number
    codename: string
    division_type: string
    name: string
    province_code: 22
}
export interface IWard {
    name : string,
    code : number,
    division_type : string,
    codename : string
    district_code : number
}