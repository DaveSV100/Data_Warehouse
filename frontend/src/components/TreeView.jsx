import React, { useState, useRef, useEffect } from 'react';
import { addRegion, updateRegion, deleteRegion } from '@services/api/regions';
import { addCountry, updateCountry, deleteCountry } from '@services/api/countries';
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
    const [edit, setEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [regionID, setRegionID] = useState("");
    const [countryID, setCountryID] = useState("");
    const [insertCountry, setInsertCountry] = useState(false);

  
    //Countries
    const countries = useGetData(endPoints.countries.getCountries);
    const handleInsertCountry = (e) => {
      e.preventDefault();
      console.log('Adding country');
      const formData = new FormData(formRef.current);
      const newCountryData = {
        id: countryID,
        region_id: regionID,
        name: formData.get('newCountry')
      }
      console.log(newCountryData);
      addCountry(newCountryData).then((response) => {
        console.log(response);
      })
    }

    //Regions
    const regions = useGetData(endPoints.regions.getRegions);
    const formRef = useRef(null);
    const handleDelete = (id) => {
      console.log("eliminando id " + id);
      deleteRegion(id).then(response => console.log(response));
      setOpen(false);
    }

    const handleEdit = (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current);
      const data = {
        id: regionID,
        name: formData.get('change')
      }
      console.log(data);
      updateRegion(data).then((response) => {
        console.log(response);
      })
      // setEdit(false)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get('name')
      }
      addRegion(data).then((response) => {
        console.log(response);
      })
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

    // const handleEdit2 = (region) => {
    //     console.log(`Editing region ${region}`);
    //     setEditRegion2(!editRegion2);
    // }

    const generateRegions = (regions) => {
      for (let i = 0; i < regions.length; i++) {
        console.log(i)
      }
    }

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
              <button type="submit" onClick={handleSubmit}>Editar</button>  

            </form>
            
          { 
            regions.map(region => (
              <>
                <TreeItem nodeId={toString(region.ID)} label={region.Name} key={`Region-${region.ID}`}>
                  <button key={`Edit-button_${region.ID}`} onClick={function deleteStates() {setEdit(true), setID(region.ID)} }>Editar</button>
                  <button key={`Delete-button_${region.ID}`} onClick={function deleteStates() {setOpen(true), setID(region.ID)} }>Eliminar</button>
                  
                  <TreeItem nodeId="25" label="Countriesss">
                    
                    <button onClick={function States() { setInsertCountry(true), setRegionID(region.ID), setCountryID(101) } }>Agregar país</button>
                    <button>Editar</button>
                    <button>Borrar</button>

                    <TreeItem nodeId="26" label="Cityyy">
                      <button>Agregar ciudad</button>
                      <button>Editar</button>
                      <button>Borrar</button>
                    </TreeItem>

                  </TreeItem>

                </TreeItem>
              </>
                
            ))
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
            //Update region
            edit && 
            <form action="/" method="PUT" ref={formRef}>
              <h2>Editar</h2>
              <input name="change" placeholder='Insertar...'></input>
              <button onClick={() => setEdit(false)}>Cerrar</button>
              <button type="submit" onClick={handleEdit}>Guardar cambios</button>
            </form>
          }
          {
            //Delete region
            open && 
            <div>
                  <h2>¿Seguro que deseas eliminar?</h2>
                  <button onClick={() => setOpen(false)}>Cerrar</button>
                  <button onClick={() => handleDelete(ID)}>Eliminar</button>
            </div>
          }


          <TreeItem nodeId="5" label={region2}>
                {/* <button onClick={() => handleEdit(region2)}>Edit</button>
                {editRegion2 && 
                    <div><input value={region2} onChange={(e) => setRegion2(e.target.value)}></input></div>
                } */}
                <TreeItem nodeId="6" label="Argentina">
                    <TreeItem nodeId="7" label="Rosario"></TreeItem>
                    <TreeItem nodeId="8" label="Buenos Aires"></TreeItem>
                </TreeItem>
                <TreeItem nodeId="9" label="Colombia">
                    <TreeItem nodeId="10" label="Bogotá"></TreeItem>
                    <TreeItem nodeId="11" label="Cartagena"></TreeItem>
                </TreeItem>
          </TreeItem>
        </TreeView>
      </Box>
      
    );
  }
  












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