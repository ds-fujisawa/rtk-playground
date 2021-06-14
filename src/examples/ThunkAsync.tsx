import React, { VFC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import store, { RootState } from '../store';
import loading from '../features/loading';
import { StateType, fetchReposByName } from '../features/thunkRepos';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useThunkAsync = (): [StateType, () => Promise<void>] => {
  const { thunkRepos } = useSelector((state: RootState) => state);
  const { dispatch } = store;
  const setRepos = async () => {
    dispatch(loading.actions.setLoading(true));
    await dispatch(fetchReposByName('ds-fujisawa'));
    dispatch(loading.actions.setLoading(false));
  };
  return [thunkRepos, setRepos];
}

const ThunkAsync: VFC = () => {
  const [repos, setRepos] = useThunkAsync();

  return (
    <Block>
      <h1>ThunkAsync</h1>
      <Button variant="contained" onClick={setRepos}>ds-fujisawa repos</Button>
      <List>
        {repos.map(({ name, link }) => (
          <ListItem key={name}>
            <a href={link}>{name}</a>
          </ListItem>
        ))}
      </List>
    </Block>
  );
}

export default ThunkAsync;

const Block = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: pink;
`;
