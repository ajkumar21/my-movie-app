import React from 'react';
import { Button } from 'reactstrap';

const search = props => {
  return (
    <form onSubmit={props.onSubmit}>
      Search
      <input
        onChange={props.onChange}
        className='mr-2'
        value={props.movieName}
      />
      <Button color='success' size='sm'>
        Search
      </Button>
    </form>
  );
};

export default search;
