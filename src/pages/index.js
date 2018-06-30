import React from 'react';
import TextField from '@material-ui/core/TextField';
import withRoot from '../withRoot';


class Index extends React.Component {

  render() {

    return (
      <div dir="rtl">
        <TextField label="Name" />
        <input type="text" placeholder="Name" />
      </div>
    );
  }
}

export default withRoot(Index);