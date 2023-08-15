import React from 'react'

const SlugPage = ({params}) => {
    const slug = params.slug
  return (
    <div>{slug}</div>
  )
}

export default SlugPage