import React from 'react';
import "./Pagination.css";
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, changePage }) {
    return (
        <div style={{ padding: '5px 0px 30px 0px' }}>
            <ReactPaginate
                breakLabel="..."

                previousLabel={<div style={{ letterSpacing: "-2px" }}>{"<<"} </div>}
                nextLabel={<span style={{ letterSpacing: "-2px" }} >{">>"}</span>}
                pageCount={pageCount}
                onPageChange={changePage}
                pageRangeDisplayed={10}
                renderOnZeroPageCount={null}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                marginPagesDisplayed={0}
            />
        </div>
    )
}

export default Pagination