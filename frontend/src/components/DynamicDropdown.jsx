import React, { useState, useEffect } from 'react';
import { Axios } from '../api/axiosInstance';
import { toast } from 'react-toastify'
const metadata = require('../metadata.json');


const DynamicDropdown = () => {
  const [selectedTable, setSelectedTable] = useState('country');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setSelectedTable(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(metadata.tables[selectedTable]);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTable]);


  return (
    <div className='m-3'>
      <div className="container  mx-auto my-8 p-6 bg-gray-200 rounded-lg shadow-lg">
        {/* <h1 className="text-2xl font-bold mb-4">Dynamic Dropdown</h1> */}
        <div className="flex flex-col items-center">
          <label htmlFor="tableName" className="mb-2 text-lg font-semibold">
            Select Data:
          </label>
          <select
            id="tableName"
            value={selectedTable}
            onChange={handleChange}
            className="border rounded p-2 mb-4"
          >
            {Object.keys(metadata.tables).map((tableName) => (
              <option key={tableName} value={tableName}>
                {tableName}
              </option>
            ))}
          </select>

          <div className="w-96">
            {loading ? (
              <p className="text-gray-600">Loading...</p>
            ) : (
              <select className="border rounded p-2 w-full">
                {data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} - Population: {item.population}
                  </option>
                ))}
              </select>
            )}
          </div>


        </div>
      </div>
    </div>
  );

};


export default DynamicDropdown;





  // return (
  //   <div className="flex flex-col items-center">
  //     <label htmlFor="tableName" className="mb-2">
  //       Select Table:
  //     </label>
  //     <select
  //       id="tableName"
  //       value={selectedTable}
  //       onChange={handleChange}
  //       className="border rounded p-2 mb-4"
  //     >
  //       {Object.keys(metadata.tables).map((tableName) => (
  //         <option key={tableName} value={tableName}>
  //           {tableName}
  //         </option>
  //       ))}
  //     </select>

  //     <div className="w-64">
  //       {loading ? (
  //         <p>Loading...</p>
  //       ) : (
  //         <select className="border rounded p-2 w-full">
  //           {data.map((item) => (
  //             <option key={item.id} value={item.id}>
  //               {item.name}
  //             </option>
  //           ))}
  //         </select>
  //       )}
  //     </div>
  //   </div>
  // );










// import React, { useState, useEffect } from 'react';
// import { fetchTableData } from '../api/fetchData';


// const DynamicDropdown = () => {
//   const [tableName, setTableName] = useState('country');
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     setLoading(true);
//     fetchTableData(tableName)
//       .then((data) => {
//         setTableData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [tableName]);

//   const handleTableChange = (e) => {
//     setTableName(e.target.value);
//   };

//   return (
//     <div>
//       <select value={tableName} onChange={handleTableChange}>
//         <option value="country">Country</option>
//         <option value="state">State</option>
//         <option value="city">City</option>
//         {/* Other options */}
//       </select>

//       {loading && <p>Loading...</p>}

//       {error && <p>Error: {error}</p>}

//       <ul>
//         {tableData.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DynamicDropdown;
