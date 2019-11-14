import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { NewComputerForm } from './components';
import { ComputerTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ComputerList = () => {
  const classes = useStyles();
  const [hasError, setErrors] = useState(false);

  const [computers, setComputers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:4000/api/computers");
      res
        .json()
        .then(res => setComputers(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  },[]);

  if(hasError) console.error(hasError);

  return (
    <div className={classes.root}>
      <NewComputerForm />
      <div className={classes.content}>
        <ComputerTable computers={computers} />
      </div>
    </div>
  );
}

export default ComputerList;