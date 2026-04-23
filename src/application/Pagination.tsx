interface myProps {
  totalLocations: number,
  perPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
}

const Pagination: React.FC<myProps> = ({ totalLocations, perPage, setCurrentPage, currentPage }) => {
    let pages: number[] = []

    for(let i = 1; i <= Math.ceil(totalLocations/perPage); i++) {
        pages.push(i)
    }

    if(pages.length > 1) {
        return (
            <div className="flex gap-2 mx-auto">
                {pages.map((page, index) => {
                    return (
                        <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'rounded-full w-8 h-8 border border-textBlue bg-textBlue text-white flex justify-center items-center' : 'rounded-full w-8 h-8 border border-textBlue text-textBlue flex justify-center items-center'}>
                            {page} 
                        </button>
                    )
                })}
            </div>
        )
    }
    
    return null
}

export default Pagination