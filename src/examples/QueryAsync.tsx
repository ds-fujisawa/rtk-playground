import React, { useState, VFC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import loading from '../features/loading';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useGetReposByNameQuery } from '../features/queryRepos';

const useQueryAsync = (): [{ name: string, link: string }[], () => void] => {
  const [skip, setSkip] = useState(true);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetReposByNameQuery('digitalstage', {
    skip
  });
  const setRepos = () => {
    setSkip(false);
  };

  if (isLoading) {
    dispatch(loading.actions.setLoading(true));
    return [[], setRepos];
  }
  if (!data) {
    dispatch(loading.actions.setLoading(false));
    return [[], setRepos]
  };

  dispatch(loading.actions.setLoading(false));
  const repos = data.map(({ name, html_url }: { name: string, html_url: string }) => ({ name, html_url }));
  return [repos, setRepos];
}

const QueryAsync: VFC = () => {
  const [repos, setRepos] = useQueryAsync();

  return (
    <Block>
      <h1>QueryAsync</h1>
      <Button variant="contained" onClick={setRepos}>digitalstage repos</Button>
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

export default QueryAsync;

const Block = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: violet;
`;
