import React from 'react'

function useGetUser() {
  const [state, setState] = React.useState('')
  const solicitud = async (api, state) => {
    const response = await fetch(`${api}/${state}`)
    const data = await response.json()
    setState(data)
  }
  return {solicitud, state}
}

export default useGetUser;