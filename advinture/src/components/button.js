import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWineGlassAlt} from '@fortawesome/free-solid-svg-icons'

const Button = () => {
  return (
    <div>
      <button type="button">
        <FontAwesomeIcon icon={faWineGlassAlt}/>
        Info
      </button>

    </div>

  )
};

export default Button