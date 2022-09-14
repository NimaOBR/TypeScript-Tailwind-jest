import React, { useEffect, useState } from 'react'

// css
import '../index.css'

// axios
import axios from 'axios'

// spinner - image
// import Spinner from '../image/Spinner.gif'

// react paginate
import ReactPaginate from 'react-paginate'

interface IData {
    id:number,
    description:string,
    title:string,
    image:string,
    success:boolean,
    hasPrevPage:boolean
    hasNextPage:boolean
    limit:number
    offset:number
    page:number,
    total:number,
    totalPages:number,
}

const Photos = () => {
  const [data, setData] = useState<IData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const userPerPage:number = 4
  const pageVisted = pageNumber * userPerPage

  const loadData = async () => {
    return await axios.get(
      `https://uniplato.staging.uniplato.us/api/v1/mock-data?page=${pageNumber}`
    )
  }
  useEffect(() => {
    setLoading(false)
    loadData().then((res: any) => setData(res.data.data.data))
  }, [])
  const pageCount = Math.ceil(data.length / userPerPage)
  const changePage = ({ selected }:any) => {
    setPageNumber(selected)
  }
  return (
    <>
      { loading
        ? (<p className='font-bold text-3xl flex justify-center items-center h-screen'>Loading...</p>)
        : (
            data.slice(pageVisted, pageVisted + userPerPage).map((item: IData) => (
        <div key={item.id}>
          <div
          className='flex justify-center items-center flex-col bg-slate-50 rounded-lg drop-shadow-md m-auto w-fit mt-10 pb-20 p-4 mb-10'>
            <img className='rounded-xl ' src={item.image} alt={item.title}/>
           <div className='w-72'>
             <p className='font-bold mt-4 mb-4'>{item.title}</p>
             <span className='text-gray-500'>{item.description}</span>
           </div>
          </div>
        </div>
            )))

          }
          <ReactPaginate className='p-20 flex gap-4 justify-center items-center mb-20'
          previousLabel={'Previos'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName='pageButton'
          previousLinkClassName={'preveiosButton'}
          nextLinkClassName={'nextBotton'}
          disabledClassName={'sidavledBotton'}
          activeClassName={'activeBotton'}
          />

    </>
  )
}

export default Photos
