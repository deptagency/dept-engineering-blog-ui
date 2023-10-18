import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Toast = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  background: white;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  border: 1px solid #121212;
  padding: 8px 16px;
  width: 100%;
  text-align: center;

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 16px;
  }
`

export const Unsubscribe = () => {
  const router = useRouter()
  const [isVisible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const { query } = router

    const unsubscribeUser = async () => {
      const data = await fetch(`/api/v1/unsubscribe?uuid=${query.unsubscribe}`)
      const json = await data.json()
      if (json.response !== 200) {
        throw Error
      }
      setMessage('Successfully unsubscribed')
    }
    if (query.unsubscribe) {
      unsubscribeUser().catch(() =>
        setMessage('There was an issue unsubscribing')
      )
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 10000)
    }
  }, [router])

  if (!isVisible) {
    return null
  }
  return (
    <Toast isVisible>
      <p>{message}</p>
    </Toast>
  )
}
