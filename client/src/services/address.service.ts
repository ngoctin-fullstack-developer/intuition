import AddressAPI from '../apis/http.address'
import { IDistrict, IProvice, IWard } from '../models/address.model';
export default class AddressService {
    static async getProvinces() {
        try {
            var response = await AddressAPI.getProvinces();
            if(response && Array.isArray(response) && typeof(response) !== 'undefined') return response;
        } catch (error) {
            return [];
        }
    }

    static async getDistrictsByProvinceCode(provinceCode : number){
        var response : Array<IDistrict> = await AddressAPI.getDistrictsByProvinceCode(provinceCode);
        return response;
    }

    static async getWardsByDistrictCode(districtCode : number){
        var response : Array<IWard> = await AddressAPI.getWardsByDistrictCode(districtCode);
        return response;
    }
}