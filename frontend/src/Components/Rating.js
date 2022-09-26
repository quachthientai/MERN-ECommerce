import React from 'react'
import PropTypes from 'prop-types'

const Rating = (props) => {
  return (
    <div className="rating">
      <span>
         {props.ratingStats >= 1 ?  <span>
                                       <i className="bi bi-star-fill" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  props.ratingStats >= 0.5 ?
                                    <span>
                                       <i className="bi bi-star-half" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  <span>
                                       <i className="bi bi-star" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
         }
      </span>

      <span>
         {props.ratingStats >= 2 ?  <span>
                                       <i className="bi bi-star-fill" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  props.ratingStats >= 1.5 ?
                                    <span>
                                       <i className="bi bi-star-half" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  <span>
                                       <i className="bi bi-star" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
         }
      </span>

      <span>
         {props.ratingStats >= 3 ?  <span>
                                       <i className="bi bi-star-fill" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  props.ratingStats >= 2.5 ?
                                    <span>
                                       <i className="bi bi-star-half" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  <span>
                                       <i className="bi bi-star" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
         }
      </span>

      <span>
         {props.ratingStats >= 4 ?  <span>
                                       <i className="bi bi-star-fill" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  props.ratingStats >= 3.5 ?
                                    <span>
                                       <i className="bi bi-star-half" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  <span>
                                       <i className="bi bi-star" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
         }
      </span>

      <span>
         {props.ratingStats >= 5 ?  <span>
                                       <i className="bi bi-star-fill" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  props.ratingStats >= 4.5 ?
                                    <span>
                                       <i className="bi bi-star-half" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
                                 :  <span>
                                       <i className="bi bi-star" style={{color: `${props.ratingColor}`}}></i>
                                    </span>
         }
      </span>

      <span className="ms-1">
         {`${props.reviewStats} reviews`}
      </span>
    </div>
  )
}

Rating.propTypes = {
   ratingStats: PropTypes.number.isRequired,
   reviewStats: PropTypes.string.isRequired,

}

export default Rating