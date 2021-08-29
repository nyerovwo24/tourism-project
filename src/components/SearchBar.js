import React, { useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';


function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
 
   const handleFilter = (event) => {
       const searchWord = event.target.value
       const newFilter = data.filter((value) => {
          return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
       });

       if (searchWord === "") {
         setFilteredData([])
       } else {
        setFilteredData(newFilter);
       }
      
   };
    return (
        <div className="search">
           <div className="searchInputs" style={{width: '600px', paddingRight: '-60px', marginLeft: '-17px', marginTop: '20px'}}>
           <div className="searchIcon">
           <SearchIcon style={{color: 'rgba(47, 128, 237, 0.5)', backgroundColor: 'white', width: '50px', height: '40px', marginTop: '8px', marginLeft: '18px', paddingRight: "20px", paddingLeft: '8px', borderRadius: '10px'}} />
           </div>
             <input style={{fontSize: '16px', paddingLeft: '5px', border: 'white', borderRadius: '10px'}} type="text" placeholder={placeholder} onChange={handleFilter}  />
           </div> 

           { filteredData.length !== 0 && ( 
           <div className="dataResult">
             {filteredData.slice(0, 15).map((value, key) => {
                return <a className="dataItem" href={value.ip_address} > 
                <p>{value.first_name}</p></a>;
             
              })}
           </div> 
           )}
        </div>
    );
}

export default SearchBar
