import { X509Certificate } from 'crypto';
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isNumber } from 'util';
import { IDistrict, IProvice, IWard } from '../models/address.model';
import AddressService from '../services/address.service';

const LoginView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [provinces, setProvinces] = useState<Array<IProvice>>([]);
  const [districts, setDistricts] = useState<Array<IDistrict>>([]);
  const [wards, setWards] = useState<Array<IWard>>([]);
  const [provinceCode, setProvinceCode] = useState(0);
  const [districtCode, setDistrictCode] = useState(0);
  const [wardCode, setWardCode] = useState(0);

  useEffect(() => {
    async function fetchProvinces() {
      var data = await AddressService.getProvinces();
      if (data && typeof (data) !== 'undefined') setProvinces(data);
    }
    async function fetchDistrictsByProvinces(provinceCode: number) {
      if (provinceCode !== 0) {
        var data = await AddressService.getDistrictsByProvinceCode(provinceCode);
        if (data && typeof (data) !== 'undefined') setDistricts(data);
      }
    }
    async function fetchWardsByDistrictCode(districtCode: number) {
      if (districtCode !== 0) {
        var data = await AddressService.getWardsByDistrictCode(districtCode);
        if (data && typeof (data) !== 'undefined') setWards(data);
      }
    }
    fetchProvinces();
    fetchWardsByDistrictCode(districtCode);
    fetchDistrictsByProvinces(provinceCode);
  }, [provinceCode, districtCode])

  async function onSelectionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    switch (event.target.id) {
      case 'province':
        setProvinceCode(Number(event.target.value));
        setDistricts([]);
        setWards([]);
        break;
      case 'district':
        setDistrictCode(Number(event.target.value));
        setWards([]);
        break;
      default:
        break;
    }
  }


  return (
    <Form className='login'>
      <Form.Group className="mb-3" controlId="login.username">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="login.password">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="login.fullname">
        <Form.Control type="text" placeholder="Fullname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="login.email">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="login.phone">
        <Form.Control type="tel" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group>
        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </Form.Group>
      <Form.Group>
        <Form.Select aria-label="Default select example" id="province" onChange={onSelectionChange} >
          <option value={0}>Province</option>
          {
            provinces.map((province) => (<option value={province.code}>{province.name}</option>))
          }
        </Form.Select>
        <Form.Select aria-label="Default select example" id="district" onChange={onSelectionChange} >
          <option value={0}>District</option>
          {
            districts.map(district => (<option value={district.code}>{district.name}</option>))
          }
        </Form.Select>
        <Form.Select aria-label="Default select example" id="ward" onChange={onSelectionChange} >
          <option value={0}>Ward</option>
          {
            wards.map(ward => (<option value={ward.code}>{ward.name}</option>))
          }
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginView