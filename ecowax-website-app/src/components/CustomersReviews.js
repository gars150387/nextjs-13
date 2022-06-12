import React from 'react'
import { ReviewData } from './ReviewData'


export const CustomersReviews = () => {
  return (
    <div>
      {
        ReviewData.map(item => {
          return (
            <div id={item}>
              <img src={require(`${item}`)} alt={`${item}`} />
            </div>
          )
        })
      }
    </div >
  )
}
