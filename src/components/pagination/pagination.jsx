import React from 'react';



const Pagination = (props) =>{
    const { itemsCountPerPage, onChange, totalItemsCount } = props;
    const countPage = Math.ceil(totalItemsCount/itemsCountPerPage);
    let arrPageNumber = [];
    for (let i = 1; i<= countPage; i++){
        arrPageNumber.push(i)
    }
    const PageNuber = arrPageNumber.map((page)=><li className="page-item"><a class="page-link" onClick = {()=>onChange(page)}>{page}</a></li>)
    const firstPage =   <li className="page-item" onClick = {()=>onChange(1)}>
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>;
    const lastPage =     <li className="page-item" onClick = {()=>onChange(countPage)}>
                            <a className="page-link" href="#" aria-label="Next">    <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
    return(
    <ul className="pagination">
        {firstPage}       
        {PageNuber}
        {lastPage}
       
    </ul>
  )

}


export default Pagination;