import React from 'react'
import { UserConsumer } from './UserContect'

function ComponentC() {
  return (
    <UserConsumer>
        {
            (username) => {
                return <h2>Hello {username.Name}</h2>
            }
        }
    </UserConsumer>
  )
}

export default ComponentC
