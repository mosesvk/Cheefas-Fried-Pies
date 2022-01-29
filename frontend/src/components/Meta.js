import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Cheefas Fried Pies',
  description: 'We sell the best Fried Pies',
  keywords: 'fried pies, utah county fried pies ',
}

export default Meta