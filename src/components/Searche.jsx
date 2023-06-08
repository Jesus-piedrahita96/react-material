import React from 'react'
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Searche(props) {
  const { setState } = props
  const [ search, setSearch ] = React.useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  const handleSubmit = () => {
    setState(search)
  }
  return (
    <>
      <div className='search'>
        <TextField
          className='search-input'
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
          size='small'
          value={search}
          onChange={handleChange}
          placeholder='Insertar informacion a buscar'
        />
        <IconButton
          className='search-button'
          onClick={handleSubmit}
        >
          <SearchIcon fontSize='small' />
        </IconButton>
      </div>
    </>
  );
}

export default Searche;