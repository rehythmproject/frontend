import { useState } from "react";
import Header from "../components/Header";
import DateSelection from "../components/UseList/DateSelection";
import SearchBox from "../components/UseList/SearchBox";
import PayRecordItem from "../components/PaymentRecord/PayRecordItem";
import './PaymentRecords.css';
const PaymentList = [
    {
        date: '2024-12-26',
        price: 1650,
        saleRate: 18,
        salePrice: 200,
        total: 1450
    },
    {
        date: '2024-12-26',
        price: 1650,
        saleRate: 18,
        salePrice: 200,
        total: 1450
    },
    {
        date: '2024-12-26',
        price: 1650,
        saleRate: 18,
        salePrice: 200,
        total: 1450
    },
    {
        date: '2024-12-26',
        price: 1650,
        saleRate: 18,
        salePrice: 200,
        total: 1450
    },
    {
        date: '2024-12-26',
        price: 1650,
        saleRate: 18,
        salePrice: 200,
        total: 1450
    },
]
const PaymentRecords = () => {
    const [searchDate, setSearchDate] = useState('')

    return(
        <div className="PaymentRecords">
            <Header />
            <div className="payrecord_compo_container">
                <div className="payrecord_top">
                    <h3 style={{whiteSpace: 'nowrap'}}>사용한 목록</h3>
                    <div className="payrecord_top_right"> 
                        <DateSelection searchDate={searchDate} setSearchDate={setSearchDate} />
                    </div>
                </div>
                <div className="payrecord_main">
                    <h3 style={{whiteSpace: 'nowrap'}}>내 결제기록보기</h3>
                    <div>
                        <ul className='payrecord_list' style={{padding:0}}>
                            {
                            PaymentList
                                .filter((item) => (item.date.includes(searchDate)))
                                .map((item) => (
                                <li key={item.code}><PayRecordItem item={item} /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default PaymentRecords;
