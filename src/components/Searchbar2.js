// import React, { useState} from 'react'
// import './SearchBar2.css'
// import SearchIcon from '@material-ui/icons/Search';


// function SearchBar2({placeholder, data}) {
//   const [filteredData, setFilteredData] = useState([]);
 
//    const handleFilter = (event) => {
//        const searchWord = event.target.value
//        const newFilter = data.filter((value) => {
//           return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
//        });

//        if (searchWord === "") {
//          setFilteredData([])
//        } else {
//         setFilteredData(newFilter);
//        }
      
//    };
//     return (
//         <div className="search">
//            <div className="searchInputs search-put" style={{width: '300px', height: '50%', marginLeft: '20px', marginRight: '20px', marginTop: '15px', borderRadius: '10px'}}>
//            <div className="searchIcon search-icon">
//            <SearchIcon className="search-icon-put" style={{color: 'rgba(47, 128, 237, 0.5)', backgroundColor: 'lightgrey', width: '50px', height: '40px', marginTop: '8px', marginLeft: '18px', paddingRight: "20px", paddingLeft: '8px', borderRadius: '10px'}} />
//            </div>
//              <input className="search-input-icon" style={{fontSize: '16px', paddingLeft: '10px', border: 'white', borderRadius: '10px'}} type="text" placeholder={placeholder} onChange={handleFilter}  />
//            </div> 

//            { filteredData.length !== 0 && ( 
//            <div className="dataResult">
//              {filteredData.slice(0, 15).map((value, key) => {
//                 return <a className="dataItem" href={value.ip_address} > 
//                 <p>{value.first_name}</p></a>;
             
//               })}
//            </div> 
//            )}
//         </div>
//     );
// }

// export default SearchBar2


// import React from 'react'
// import './SearchBar2.css'
// import SearchIcon from '@material-ui/icons/Search';



// function Searchbar2({placeholder, data}) {
//     return (
//         <div className='search search-input' style={{}}>
//         <div className='searchInputs search-put' style={{marginTop: '10px',  display: 'flex', marginLeft: '60px', marginRight: '-140px', paddingLeft: '-40px', paddingRight: '-40px'}}>
//           <input type="text" placeholder={placeholder} style={{height: '30px', padding: '18px', paddingLeft: '40px'}} />
//           <div className='searchIcon search-icons'><SearchIcon style={{height: '60px', width: '25px', backgroundColor: 'lightgrey', display: 'grid', placeItems: 'center'}} /></div>
//         </div>
//         <div className='dataResult'></div>
//         {data.map((value, key) => {
//           return <a className='dataItem' href={value.ip_address}>
//           <p>{value.first_name}</p>
//           </a>;
//         })}
            
//         </div>
//     )
// }

// export default Searchbar2

