import { useState } from 'react';
import './App.css';
import FilterComponent from './Components/FilterComponent/FilterComponent';
import TableComponent from './Components/TableComponent/TableComponent';
import PaginationComponent from './Components/PaginationComponent/PaginationComponent';

function App() {

  const [input, setInput] = useState('');
  const [pageNr, setPageNr] = useState(1);

  return (
    <div className="App">
      <FilterComponent input={input} setInput={setInput}/>
      <TableComponent input={input} pageNr={pageNr}/>
      <PaginationComponent pageNr={pageNr} setPageNr={setPageNr}/>
    </div>
  );
}

export default App;
