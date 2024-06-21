import React from 'react'
import Elijah_Adams_Resume_2024 from '../documents/Elijah_Adams_Resume_2024.pdf'

const Download = () => {
  return (
    <>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href = {Elijah_Adams_Resume_2024} target = "_blank">View Resume</a>
    </>
  )
}

export default Download;