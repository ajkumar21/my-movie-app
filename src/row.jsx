import React from 'react';
import { Button } from 'reactstrap';
import MovieInfo from './movieInfo';

const row = ({ id, title, year, poster }) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{year}</td>
      <td>
        <Button color='primary' size='sm' className='mr-2'>
          Add to Favourites
        </Button>
        <MovieInfo
          color='danger'
          size='sm'
          className='mr-2'
          buttonLabel='More Info'
          imdbID={id}
          title={title}
          poster={poster}
        />
      </td>
    </tr>
  );
};

export default row;
