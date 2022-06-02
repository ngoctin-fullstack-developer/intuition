import '../styles/checkoutPayment.style.scss'
import { useState } from 'react'
const CheckoutPayment = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<number>(0);
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.currentTarget.value)
        setSelectedPaymentMethod(Number(event.currentTarget.value))
    }
    return (
        <div className='checkoutPayment'>
            <div className="__radios">
                <div className="__singleRadio">
                    <input type="radio" name="group1" id="radio1" checked={selectedPaymentMethod === 0} value={0} onChange={onChangeHandler} />
                    <div className='__line'></div>
                    COD
                </div>
                <div className="__singleRadio">
                    <input type="radio" name="group1" id="radio1" checked={selectedPaymentMethod === 1} value={1} onChange={onChangeHandler} />
                    <div className='__line'></div>
                    Internet Banking
                </div>
                <div className="__singleRadio">
                    <input type="radio" name="group1" id="radio1" checked={selectedPaymentMethod === 2} value={2} onChange={onChangeHandler} />
                    <div className='__line'></div>
                    Momo
                </div>
                <div className="__singleRadio">
                    <input type="radio" name="group1" id="radio1" checked={selectedPaymentMethod === 3} value={3} onChange={onChangeHandler} />
                    <div className='__line'></div>
                    Card
                </div>
            </div>
            {selectedPaymentMethod === 1 && (<div className='__method'>
                <div className='__text' >
                    <p>STK : 0123456789</p>
                    <p>Bank : TPBank</p>
                    <p>Owner : Nguyen Ngoc Tin</p>
                </div>
            </div>)}
            {selectedPaymentMethod === 2 && (<div className='__method'>
                <p>STK : 0327244190</p>
                <p>Owner : Nguyen Ngoc Tin</p>
            </div>)}
            {selectedPaymentMethod === 3 && (<div>Card</div>)}
        </div>
    )
}

export default CheckoutPayment