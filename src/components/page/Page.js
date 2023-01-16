import { Helmet } from 'react-helmet';
import React from 'react'

const Page = (props) => {
  const { title, children, ...rest } = props;
  React.useEffect(()=> {

  }, [title])
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
}

export default Page
