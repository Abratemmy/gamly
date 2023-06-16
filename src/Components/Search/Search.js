import React from 'react';
import "./Search.css";
import { BiSearch } from 'react-icons/bi';

function Search({ handleSearch, search }) {
    return (
        <div>
            <div className='' >
                <BiSearch className="icon" />
                <input type="text" className="form-control" placeholder="Search"
                    onChange={handleSearch} value={search}
                />
            </div>
        </div>
    )
}

export default Search