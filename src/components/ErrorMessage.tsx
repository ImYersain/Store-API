import React from 'react'

interface ErrorMessageProps {
  error: string
}

export default function ErrorMessage({error}: ErrorMessageProps) {
  return (
    <h1 className='text-center mt-5 text-red-500'>{error}</h1>
  )
}
