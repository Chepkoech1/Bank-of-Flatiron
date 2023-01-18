import React, { useState } from 'react'

const AddTransaction = ({TransactionRecords, setRecords }) => {
  
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  function handleSetDate(e) {
    //console.log(e.target.value);
    setDate(e.target.value);
  }

  function handleSetDescription(e) {
    setDescription(e.target.value);
  }

  function handleSetAmount(e) {
    setAmount(e.target.value);
  }

  function sendDataToDatabase() {
    fetch('https://chepkoech.vercel.app/transactions', {
      method: 'POST',
      body: JSON.stringify({
        date, description, amount
      }),
      headers: {
        'Content-Type': 'Application/JSON'
      }
    })
      .then(res => res.json())
      .then(res => {
        setRecords([...TransactionRecords, res]);
      });
  }

  return (
    <form>
      <input type="date" onChange={(e)=>{handleSetDate(e)}} placeholder='Date'/>
      <input type="text" onChange={(e)=>{handleSetDescription(e)}} placeholder='Description'/>
      <input type="number" onChange={(e)=>{handleSetAmount(e)}} placeholder='Amount' />
      <button type='button' onClick={sendDataToDatabase}>Add Record</button>
    </form>
  )
}

export default AddTransaction
