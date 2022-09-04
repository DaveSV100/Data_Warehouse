import React, { useState, useRef } from 'react';
import { addRegion } from '@services/api/regions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function ControlledTreeView() {

    const formRef = useRef(null);

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

    const [region2, setRegion2] = useState('Sudamérica');
    const [editRegion2, setEditRegion2] = useState(false);

    const handleEdit = (region) => {
        console.log(`Editing region ${region}`);
        setEditRegion2(!editRegion2);
    }


    return (
      <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
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
            
            <div onClick={() => handleRegion()}>Region
                {region && 
                    <div>Country
                    </div>
                }
            </div>

          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
          </TreeItem>
          <TreeItem  nodeId="5" label={region2}>
                <button onClick={() => handleEdit(region2)}>Edit</button>
                {editRegion2 && 
                    <div><input value={region2} onChange={(e) => setRegion2(e.target.value)}></input></div>
                }
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