import React from 'react'
import { useSelector } from 'react-redux'
import { getAlldata } from '../../redux/rapidApiSlice'
//import { getCheck } from '../../redux/rapidApiSlice'

const HomeBody = () => {
    const myData = useSelector(getAlldata);
    console.log(myData)
    // const myRender = myData.Response === 'success' ?(
    //     <div>
    //         {myData.data.data.stats.total}
    //     </div>
    // ):(
    //     <div>
    //         no data yet
    //     </div>
    // )
    if ('success' === 'success'){
      return (
        <div>{console.log(myData.data)}</div>
      )
    }
  return (
    <div>
      good
    </div>
  )
}

export default HomeBody
