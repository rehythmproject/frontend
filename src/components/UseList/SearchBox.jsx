import './SearchBox.css'

const SearchBox = ({searchBox, setSearchBox}) => {
    const handleSearchBox = (e) => {
        setSearchBox(e.target.value);
        console.log(searchBox);
    }

    return (
        <div className="SearchBox">
            <img src="/images/search-normal.png" alt="검색" className='search_icon'/>
            <input type="text" className="search" placeholder='Search' onChange={handleSearchBox}/>
        </div>
    )
}

export default SearchBox;