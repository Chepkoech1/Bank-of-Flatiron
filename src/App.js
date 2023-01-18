import { useState, useEffect} from 'react';
import AddTransaction from './components/addTransaction';
import DisplayTransaction from './components/displayTransaction';
import SearchTransaction from './components/searchTransaction';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    console.log("hey");
    fetch("https://chepkoech.vercel.app/transactions
      .then(res => res.json())
      .then(res => {
        setRecords(res);
      })
  }, [])

  return (
    <>
      <SearchTransaction TransactionRecords={records} setRecords={setRecords} />
      <AddTransaction TransactionRecords={records} setRecords={setRecords} />
      <table>
        <tbody>
          <tr>
          
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          {records.map(record => {
            return <DisplayTransaction key={record.id} record={record} />
          })}
        </tbody>
      </table>
      
    </>
    
  );
}

export default App;
