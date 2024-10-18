import './ProgressBar.css';

const ProgressBar = ({currentPage, totalPage}) => {
    return(
        currentPage === 4 ? 
        (    
            <div className="progress_bar">
                <div className='progress_segment_end'/>
            </div>
        )
        : (    
        <div className="progress_bar">
            {Array.from({ length: totalPage }, (_, index) => ( //Array.from - 배열 생성, {length: totalPage} - 배열 길이 totalPage로 설정
            //(_, index): _는 배열 요소 자체를 의미하지만 여기서는 사용되지 않아 _로 이름을 붙
                <div key={index} className={`progress_segment ${index < currentPage + 1 ? 'filled' : ''}`}/>))}
        </div>
        )
    );
}

export default ProgressBar;