function SearchBar() {
    return (
        <div className="search-bar">
            <p>Prestations</p> 
            <div>
            <input type="text" placeholder="Votre recherche..."/>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>


    )
}

export default SearchBar;