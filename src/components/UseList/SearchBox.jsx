import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="SearchBox">
            <img src="/images/search-normal.png" alt="검색" className='search_icon'/>
            <input type="text" className="search" placeholder='Search'/>
        </div>
    )
}

export default SearchBox;