import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {

   const errors = useRouteError()
   const navigate = useNavigate()

   return (
      <div>
         <h2>Something went wrong 😢</h2>
         <span>{ errors.data || errors.message }</span>
         <button
            onClick={ () => navigate(-1) }
         >&larr; Go back</button>
      </div>
   )
}

export default Error