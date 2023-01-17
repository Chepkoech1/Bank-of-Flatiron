import React from 'react'


const DisplayTransaction = ({record}) => {

  return (
    <>
        <tr>
              <td>{record.id}</td>
              <td>{record.date}</td>
              <td>{record.description}</td>
              <td>{record.amount}</td>
        </tr>
    </>
  )
}

export default DisplayTransaction