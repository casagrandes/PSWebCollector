import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  }
}));

const ComputerTable = props => {
  const { computers, ...rest } = props

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  const handleRamData = computer => {
    if(computer.ramGB) {
      return `${computer.ramGB} GB`
    }
  };
  
  const handleDiskSpaceData = computer => {
    if(computer.diskFreeSpaceGB) {
      return `${computer.diskFreeSpaceGB} GB`
    }
  };

  const handleDate = computer => {
    if(computer.updatedAt) {
      const dateObj = computer.updatedAt;
      return dateObj.toString().slice(0,10);
    }
  }

  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardContent className={classes.content}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Computer Name</TableCell>
            <TableCell>Computer Role</TableCell>
            <TableCell>User</TableCell>
            <TableCell>OS</TableCell>
            <TableCell>CPU</TableCell>
            <TableCell>CPU Cores</TableCell>
            <TableCell>RAM</TableCell>
            <TableCell>GPU</TableCell>
            <TableCell>Disk Free Space</TableCell>
            <TableCell>Updated</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {computers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(computer => (
              <TableRow
                className={classes.tableRow}
                hover
                key={computer.id}
              >
                <TableCell>{computer.name}</TableCell>
                <TableCell>{computer.domainRole}</TableCell>
                <TableCell>{computer.user}</TableCell>
                <TableCell>{computer.os}</TableCell>
                <TableCell>{computer.cpuName}</TableCell>
                <TableCell>{`${computer.cpuVirtCores} Virtual Cores`}</TableCell>
                <TableCell>{handleRamData(computer)}</TableCell>
                <TableCell>{computer.gpuName}</TableCell>
                <TableCell>{handleDiskSpaceData(computer)}</TableCell>
                <TableCell>{handleDate(computer)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={computers.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
}

export default ComputerTable;