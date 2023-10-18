/* eslint-disable no-console */
import { GetServerSideProps } from 'next'

const Page = () => {
  return <></>
}

export default Page

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!(query && query.uuid)) {
    return {
      redirect: {
        destination: `/`,
        permanent: false
      }
    }
  }
  const { uuid } = query

  return {
    redirect: {
      destination: `/?unsubscribe=${uuid}`,
      permanent: false
    }
  }
}
