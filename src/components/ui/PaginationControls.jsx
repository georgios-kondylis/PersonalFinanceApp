import React from 'react'

const PaginationControls = ({currentPage, setCurrentPage, totalPages}) => {
  return (
    <div className="w-full justify-between flex gap-[10px] mt-[40px]">
      <button className="flex items-center gap-[10px] p-[10px] text-[#201f24] rounded-[10px] border border-[#a5a5a5] hover:border-[#121212]"  
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}> {/* the ,1 ensure it never goes below 1 */}
        <i className="mt-[3px] fa-solid fa-caret-left"></i>
        <p>Prev</p>
      </button>
      
      <div className="flex items-center gap-[15px]">
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} className={`py-[8px] px-[12px] rounded-[10px] border border-[#a5a5a5] hover:border-[#121212] min-w-[40px] ${i === currentPage - 1 && 'bg-[#201f24] text-white'}`}
          onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      
      <button  className="flex items-center gap-[10px] p-[10px] text-[#201f24] rounded-[10px] border  border-[#a5a5a5] hover:border-[#121212]" 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
        <p>Next</p>
        <i className="mt-[3px] fa-solid fa-caret-right"></i>
      </button>
    </div>
  )
}

export default PaginationControls

