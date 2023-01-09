import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    /* Centrar Spinner */
    <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Spinner
