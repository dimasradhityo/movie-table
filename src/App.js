
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import * as movieAPI from './utils/api'
import { Table } from './component/Table';

function App() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      let response = await movieAPI.getData()
      setData(response)

    }
    fetchData()
    // console.log(data)
  }, [])


  // const dataTable = useMemo(() => data.data.movies, [])
  const columns = useMemo(() =>[
    {
      Header:'ID Movies',
      accessor: 'id'
    },
    {
      Header:'name',
      accessor: 'name'
    },
    {
      Header:'genre',
      accessor: 'genre'
    },
    {
      Header:'actor',
      columns: [
        {
          Header: 'id Actor',
          accessor:'actor.id'
        },
        {
          Header: 'name',
          accessor:'actor.name'
        },
        {
          Header: 'age',
          accessor:'actor.age'
        },
      ]
    },
  ], [])
  return (
    <div className="App">
      <h1>showing movie list with react-table</h1>
      {data == null ? <div>Data Null</div> : <Table columns={columns} data={data.data.movies} />}
      
    </div>
  );
}

export default App;
