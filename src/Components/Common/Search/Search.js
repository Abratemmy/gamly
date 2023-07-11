import React from 'react';
import "./Search.css";
import { BiSearch } from 'react-icons/bi';

function Search({ setSearch, search }) {
    return (
        <div>
            <div className='' >
                <BiSearch className="icon" />
                <input type="text" className="form-control" placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)} value={search}
                />
            </div>
        </div>
    )
}

export default Search