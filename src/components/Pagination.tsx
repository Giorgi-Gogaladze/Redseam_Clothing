import React from 'react'
import { IPagination } from './utils/interfaces/Ipagination'

const Pagination:React.FC<IPagination> = ({totalpages, currentpage, setPage}) => {
   const getPages = () => {
     const pages: (number | string)[] = [];

    if(totalpages <= 6){
        for(let i = 1; i <= totalpages; i++){
            pages.push(i)
        } 
    }else{
            pages.push(1)
    }
    if(currentpage >= 3) pages.push('...');

     for (
        let i = Math.max(2, currentpage - 1);
        i <= Math.min(totalpages - 1, currentpage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentpage < totalpages - 2) pages.push("...");

      pages.push(totalpages);
      return pages;
   }
    

  return (
    <section className='flex w-full justify-center h-[32px] items-center mb-[100px]'>
    <div className="flex w-[248px] h-full gap-2 items-center mt-6">
      <button
        disabled={currentpage === 1}
        onClick={() => setPage(currentpage - 1)}
        className='cursor-pointer'
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.78033 0.21967C6.07322 0.512563 6.07322 0.987437 5.78033 1.28033L2.06066 5L5.78033 8.71967C6.07322 9.01256 6.07322 9.48744 5.78033 9.78033C5.48744 10.0732 5.01256 10.0732 4.71967 9.78033L0.46967 5.53033C0.176777 5.23744 0.176777 4.76256 0.46967 4.46967L4.71967 0.21967C5.01256 -0.0732233 5.48744 -0.0732233 5.78033 0.21967Z" fill="#10151F"/>
        </svg>
      </button>

      {getPages().map((p, idx) =>
        typeof p === "number" ? (
          <button
            key={idx}
            onClick={() => setPage(p)}
            className={`px-3 py-1 rounded  cursor-pointer ${
              p === currentpage ? "border border-red-500 text-red-500" : "border border-gray-300"
            }`}
          >
            {p}
          </button>
        ) : (
          <span key={idx}>...</span>
        )
      )}

      <button
        disabled={currentpage === totalpages}
        onClick={() => setPage(currentpage + 1)}
        className='cursor-pointer'
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512564 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.53033 4.46967C5.82322 4.76256 5.82322 5.23744 5.53033 5.53033L1.28033 9.78033C0.987437 10.0732 0.512563 10.0732 0.21967 9.78033C-0.0732233 9.48744 -0.0732233 9.01256 0.21967 8.71967L3.93934 5L0.21967 1.28033C-0.073223 0.987437 -0.073223 0.512563 0.21967 0.21967Z" fill="#10151F"/>
        </svg>
      </button>
    </div>
    </section>
  )
}
export default Pagination