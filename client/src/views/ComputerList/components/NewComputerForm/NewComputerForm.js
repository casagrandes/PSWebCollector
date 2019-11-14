import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import { Formik, Field, Form } from 'formik';
import { TextField} from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    display: 'flex',
    flexDirection: 'column'
  }
}));

const osChoices = [
  {
    value: 'Microsoft Windows 7 Home',
    label: 'Microsoft Windows 7 Home',
  },
  {
    value: 'Microsoft Windows 7 Professional',
    label: 'Microsoft Windows 7 Professional',
  },
  {
    value: 'Microsoft Windows 10 Professional',
    label: 'Microsoft Windows 10 Professional',
  },
  {
    value: 'Microsoft Windows 10 Enterprise',
    label: 'Microsoft Windows 10 Enterprise',
  },
]

const NewComputerForm = props => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        New Computer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="new-computer-form">
        <DialogTitle id="newComputerFormTitle" >New Computer</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ computerName: '',}}
            validate={values => {
              let errors = {};
              if(!values.computerName) {
                errors.computerName = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={classes.form}>
                <Field className={classes.textfield} type="text" name="computerName" label="Computer Name" component={TextField} />
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewComputerForm;