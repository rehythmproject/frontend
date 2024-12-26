
import './PayRecordItem.css';



const PayRecordItem = ({item}) => {

    return(
        <div className="PayRecordItem">
            <div className="payrecorditem_top">
                <h3>최종 결제확인</h3>
                <p>{item.date}</p>
            </div>
            <div className="payrecorditem_price">
                <p>총 상품 금액</p>
                <p>{item.price}원</p>
            </div>
            <div className="payrecorditem_price">
                <p>할인합계</p>
                <p><span>{item.saleRate}%</span>-{item.salePrice}원</p>
            </div>
            <hr className='payrecorditem_hr' />
            <div className="payrecorditem_total">
                <p>총 결제금액</p>
                <h2>{item.total}원</h2>
            </div>
        </div>
    )
}

export default PayRecordItem;