import React, { useState, useRef, useEffect } from 'react';
import { addRegion, updateRegion, deleteRegion } from '@services/api/regions';
import { addCountry, updateCountry, deleteCountry } from '@services/api/countries';
import { addCity, updateCity, deleteCity } from '@services/api/cities';
import useGetData from '@hooks/useGetData';
import endPoints from '@services/api';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function ControlledTreeView() {

  //States
  const [insertRegion, setInsertRegion] = useState(false);
  const [editRegion, setEditRegion] = useState(false);
  const [removeRegion, setRemoveRegion] = useState(false);
  const [insertCountry, setInsertCountry] = useState(false);
  const [editCountry, setEditCountry] = useState(false);
  const [removeCountry, setRemoveCountry] = useState(false);
  const [insertCity, setInsertCity] = useState(false);
  const [editCity, setEditCity] = useState(false);
  const [removeCity, setRemoveCity] = useState(false);
  const [regionID, setRegionID] = useState("");
  const [countryID, setCountryID] = useState("");
  const [cityID, setCityID] = useState("");

  //Cities
  const cities = useGetData(endPoints.cities.getCities);

  const handleInsertCity = (e) => {
    e.preventDefault();
    console.log('Adding city');
    const formData = new FormData(formRef.current);
    const newCityData = {
      country_id: countryID,
      name: formData.get('newCity')
    }
    console.log(newCityData);
    addCity(newCityData).then((response) => {
      console.log(response);
    })
  }

  const handleEditCity = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      id: cityID,
      name: formData.get('changeCity')
    }
    console.log(data);
    updateCity(data).then((response) => {
      console.log(response);
    })
  }

  const handleDeleteCity = (id) => {
    console.log("eliminando id " + id);
    deleteCity(id).then(response => console.log(response));
    setRemoveCity(false);
  }

  //Countries
  const countries = useGetData(endPoints.countries.getCountries);

  const handleInsertCountry = (e) => {
    e.preventDefault();
    console.log('Adding country');
    const formData = new FormData(formRef.current);
    const newCountryData = {
      region_id: regionID,
      name: formData.get('newCountry')
    }
    console.log(newCountryData);
    addCountry(newCountryData).then((response) => {
      console.log(response);
    })
  }

  const handleEditCountry = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      id: countryID,
      name: formData.get('changeCountry')
    }
    console.log(data);
    updateCountry(data).then((response) => {
      console.log(response);
    })
  }

  const handleDeleteCountry = (id) => {
    console.log("eliminando id " + id);
    deleteCountry(id).then(response => console.log(response));
    setRemoveCountry(false);
  }

  //Regions
  const regions = useGetData(endPoints.regions.getRegions);
  const formRef = useRef(null);

  const handleInsertRegion = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('newRegion')
    }
    addRegion(data).then((response) => {
      console.log(response);
    })
  }

  const handleEditRegion = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      id: regionID,
      name: formData.get('changeRegion')
    }
    console.log(data);
    updateRegion(data).then((response) => {
      console.log(response);
    })
    // setEdit(false)
  }

  const handleDeleteRegion = (id) => {
    console.log("eliminando id " + id);
    deleteRegion(id).then(response => console.log(response));
    setRemoveRegion(false);
  }


  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  console.log(selected);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
    );
  };

  const [region, setRegion] = useState(false);

  const handleRegion = () => {
      setRegion(!region);
  }
  const [region2, setRegion2] = useState('Suda');
  const [editRegion2, setEditRegion2] = useState(false);

  const toString = (id) => {
    return id.toString();
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 800, overflowY: 'auto', margin: '5vh auto 0' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >

        <form action="/" method="POST" ref={formRef}>

          <input name="name" placeholder='insert region'></input>
          <button type="submit" onClick={handleInsertRegion}>Editar</button>  

        </form>
            
        { 
          regions.map(region => (
            <>
            <TreeItem nodeId={toString(region.ID)} label={region.Name} key={`Region-${region.ID}`}>
              <button key={`addRegion-button_${region.ID}`} type="submit" onClick={function States() { setInsertRegion(true) } }>Agregar</button>  
              <button key={`editRegion-button_${region.ID}`} onClick={() => {setEditRegion(true), setRegionID(region.ID)} }>Editar</button>
              <button key={`deleteRegion-button_${region.ID}`} onClick={() => {setRemoveRegion(true), setRegionID(region.ID)} }>Eliminar</button>
              {countries.map(country => 
                {
                if(region.ID == country.Region_ID)
                return (
                  <TreeItem nodeId={toString(country.ID + 1000)} label={country.Name} key={`Country-${country.ID}`}>
                    <button onClick={function States() { setInsertCountry(true), setRegionID(region.ID) } }>Agregar país</button>
                    <button key={`editCountry-button_${country.ID}`} onClick={() => {setEditCountry(true), setCountryID(country.ID)} }>Editar</button>
                    <button key={`deleteCountry-button_${country.ID}`} onClick={() => {setRemoveCountry(true), setCountryID(country.ID)} }>Borrar</button>
                    {cities.map(city => 
                      {
                      if(country.ID == city.Country_ID)
                      return (
                        <TreeItem nodeId={toString(city.ID + 2000)} label={city.Name} key={`City-${city.ID}`}>
                        <button onClick={function States() { setInsertCity(true), setCountryID(country.ID) } }>Agregar ciudad</button>
                        <button key={`editCity-button_${city.ID}`} onClick={() => {setEditCity(true), setCityID(city.ID)} }>Editar</button>
                        <button key={`deleteCity-button_${city.ID}`} onClick={() => {setRemoveCity(true), setCityID(city.ID)} }>Borrar</button>
                        </TreeItem>
                      )
                      }
                    )}
                  </TreeItem>
                )
                }
                )}
            </TreeItem>
            </>
              
          ))
        }
        {
          //Create city
          insertCity && 
          <form action="/" method="POST" ref={formRef}>
            <h3>Agregar ciudad</h3>
            <input type="text" name="newCity" placeholder='Agregar ciudad'></input>
            <button onClick={() => setInsertCity(false)}>Cerrar</button>
            <button type="submit" onClick={handleInsertCity}>Guardar cambios</button>
          </form>
        }
        {
          //Update city
          editCity && 
          <form action="/" method="PUT" ref={formRef}>
          <h3>Editar ciudad</h3>
          <input name="changeCity" placeholder='Insertar...'></input>
          <button onClick={() => setEditCity(false)}>Cerrar</button>
          <button type="submit" onClick={handleEditCity}>Guardar cambios</button>
        </form>
        }
        {
          //Remove city
          removeCity &&
          <div>
            <h3>¿Seguro que deseas eliminar?</h3>
            <button onClick={() => setRemoveCity(false)}>Cerrar</button>
            <button onClick={() => handleDeleteCity(cityID)}>Eliminar</button>
          </div>
        }
        {
          //Create country
          insertCountry && 
          <form action="/" method="POST" ref={formRef}>
            <h3>Agregar país</h3>
            <input type="text" name="newCountry" placeholder='Agregar país'></input>
            <button onClick={() => setInsertCountry(false)}>Cerrar</button>
            <button type="submit" onClick={handleInsertCountry}>Guardar cambios</button>
          </form>
        }
        {
          //Update country
          editCountry && 
          <form action="/" method="PUT" ref={formRef}>
            <h3>Editar país</h3>
            <input name="changeCountry" placeholder='Insertar...'></input>
            <button onClick={() => setEditCountry(false)}>Cerrar</button>
            <button type="submit" onClick={handleEditCountry}>Guardar cambios</button>
          </form>
        }
        {
          removeCountry && 
          <div>
                <h3>¿Seguro que deseas eliminar?</h3>
                <button onClick={() => setRemoveCountry(false)}>Cerrar</button>
                <button onClick={() => handleDeleteCountry(countryID)}>Eliminar</button>
          </div>
        }
        {
          //Create region
          insertRegion &&
          <form action="/" method="POST" ref={formRef}>
            <h3>Crear región</h3>
            <input type="text" name="newRegion" placeholder='Agregar region'></input>
            <button onClick={() => setInsertRegion(false)}>Cerrar</button>
            <button type="submit" onClick={handleInsertRegion}>Guardar cambios</button>
          </form>
        }
        {
          //Update region
          editRegion && 
          <form action="/" method="PUT" ref={formRef}>
            <h2>Editar</h2>
            <input name="changeRegion" placeholder='Insertar...'></input>
            <button onClick={() => setEditRegion(false)}>Cerrar</button>
            <button type="submit" onClick={handleEditRegion}>Guardar cambios</button>
          </form>
        }
        {
          //Delete region
          removeRegion && 
          <div>
                <h2>¿Seguro que deseas eliminar?</h2>
                <button onClick={() => setRemoveRegion(false)}>Cerrar</button>
                <button onClick={() => handleDeleteRegion(regionID)}>Eliminar</button>
          </div>
        }
      </TreeView>
    </Box>
    
  );
}
  



























// {/* <TreeItem nodeId="5" label={region2} key={'206'}>
//       {/* <button onClick={() => handleEdit(region2)}>Edit</button>
//       {editRegion2 && 
//           <div><input value={region2} onChange={(e) => setRegion2(e.target.value)}></input></div>
//       } */}
//       <TreeItem nodeId="6" label="Argentina">
//           <TreeItem nodeId="7" label="Rosario"></TreeItem>
//           <TreeItem nodeId="8" label="Buenos Aires"></TreeItem>
//       </TreeItem>
//       <TreeItem nodeId="9" label="Colombia">
//           <TreeItem nodeId="10" label="Bogotá"></TreeItem>
//           <TreeItem nodeId="11" label="Cartagena"></TreeItem>
//       </TreeItem>
// </TreeItem> */}





// import * as React from 'react';
// import TreeView from '@mui/lab/TreeView';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TreeItem from '@mui/lab/TreeItem';

// export default function FileSystemNavigator() {
//   return (
//     <>
//         <button>Agregar región</button>
//         <button>Agregar país</button>
//         <button>Agregar ciudad</button>
//         <TreeView
//         aria-label="file system navigator"
//         defaultCollapseIcon={<ExpandMoreIcon />}
//         defaultExpandIcon={<ChevronRightIcon />}
//         sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
//         >
//         <TreeItem nodeId="1" label="Sudamérica">
//             <button onClick={()=> handleEdit()}>Editar</button>
//             <TreeItem nodeId="2" label="Argentina" />
//             <TreeItem nodeId="3" label="Colombia" />
//         </TreeItem>
//         <TreeItem nodeId="5" label="Norteamérica">
//             <TreeItem nodeId="10" label="Estados Unidos" >
//                 <TreeItem nodeId="8" label="New York" />
//                 <TreeItem nodeId="9" label="San Francisco" />
//             </TreeItem>
//             <TreeItem nodeId="6" label="México">
//             <TreeItem nodeId="11" label="Veracruz" />
//             <TreeItem nodeId="12" label="Guadalajara" />
//             </TreeItem>
//         </TreeItem>
//         </TreeView>
//     </>
//   );
// }


