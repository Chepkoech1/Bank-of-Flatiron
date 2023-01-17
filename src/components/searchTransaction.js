import React, { useState } from 'react'

const SearchTransaction = ({ TransactionRecords, setRecords }) => {


  function handleSearchItem(e) {
    const value = e.target.value.toString();
    const filteredResults = TransactionRecords.filter((element) => {
      if (element.id.toString().indexOf(value) != -1 || element.description.toString().indexOf(value) != -1 || element.date.toString().indexOf(value) != -1 || element.amount.toString().indexOf(value) != -1) {
        return element;
      }
    })

    setRecords(filteredResults);

  }

  return (
    <form>
      <input type="text" placeholder='search' onChange={handleSearchItem}/>
    </form>
  )
}

export default SearchTransaction