import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Norteamérica">
        <TreeItem nodeId="10" label="Estados Unidos" />
        <TreeItem nodeId="6" label="México">
          <TreeItem nodeId="8" label="Monterrey" />
          <TreeItem nodeId="9" label="Guadalajara" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}