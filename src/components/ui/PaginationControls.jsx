import React from 'react'
import { custom_470_breakpoint } from '../../utils'

const PaginationControls = ({currentPage, setCurrentPage, totalPages}) => {

  const maxSM = custom_470_breakpoint();
  
  return (
    <div className="w-full justify-between flex gap-[10px] mt-[40px]">
      <button className="flex justify-center items-center gap-[10px] p-[10px] text-[#201f24] rounded-[10px] border border-[#a5a5a5] min-w-[45px]
       hover:bg-[#201f24] hover:text-white hover:opacity-[80%] transition2"  
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}> {/* the ,1 ensure it never goes below 1 */}
        <i className="mt-[3px] fa-solid fa-caret-left"></i>
        <p className='max-sm:hidden'>Prev</p>
      </button>
      
      <div className="flex items-center gap-[10px] max-sm:gap-[8px]">
        {maxSM && totalPages > 4?  
          <p className="text-[#201f24] font-medium text-[18px]">
            Page {currentPage} of {totalPages}
          </p>
         : 
          [...Array(totalPages)].map((_, i) => (
            <button key={i} className={`font-sans py-[10px] px-[12px] rounded-[10px] border border-[#a5a5a5] min-w-[41px]  ${i === currentPage - 1 && 'bg-[#201f24] text-white'}
            hover:bg-[#201f24] hover:text-white hover:opacity-[80%] transition2`}
            onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          ) )
        }
      </div>
      
      <button  className="flex justify-center items-center gap-[10px] p-[10px] text-[#201f24] rounded-[10px] border  border-[#a5a5a5] min-w-[45px]
      hover:bg-[#201f24] hover:text-white hover:opacity-[80%] transition2" 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
        <p className='max-sm:hidden'>Next</p>
        <i className="mt-[3px] max-sm:scale-[1.1] fa-solid fa-caret-right"></i>
      </button>
    </div>
  )
}

export default PaginationControls

