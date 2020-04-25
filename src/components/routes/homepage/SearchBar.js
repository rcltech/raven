import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: theme.spacing(1),
    alignItems: 'center'
  },
  searchBar: {
    width: 'min(100%, 300px)',
    color: theme.palette.primary.main
  },
  sortParamSelector: {
    width: 'min(100%, 150px)',
    justifySelf: 'end'
  }
}));

export const SearchBar = ({ setFilter, sortParam, setSortParam }) => {
  const classes = useStyles();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const sortParams = ['Date', 'Subscribers', 'Most recent'];

  return (
    <Container className={classes.container}>
      <OutlinedInput
        className={classes.searchBar}
        placeholder="Search"
        endAdornment={<SearchIcon color="inherit" />}
        onChange={({ target: { value } }) => setFilter(value)}
      />
      <FormControl variant="outlined" className={classes.sortParamSelector}>
        <InputLabel ref={inputLabel} id="sort-param-selector">
          Sort by
        </InputLabel>
        <Select
          labelId="sort-param-selector"
          labelWidth={labelWidth}
          value={sortParam}
          onChange={({ target: { value } }) => setSortParam(value)}
        >
          {sortParams.map((elem, index) => (
            <MenuItem key={index} value={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};
