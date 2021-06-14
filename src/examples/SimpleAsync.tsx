import React, { VFC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import loading from '../features/loading';
import featuresSimpleRepos, { StateType } from '../features/simpleRepos';
import { getRepos } from '../services/github';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useSimpleAsync = (): [StateType, () => Promise<void>] => {
  const { simpleRepos } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const setRepos = async () => {
    dispatch(loading.actions.setLoading(true));
    const repos = await getRepos('f-a24');
    const res = repos.map(({ name, html_url }: { name: string, html_url: string }) => ({ name, html_url }));
    dispatch(featuresSimpleRepos.actions.setRepos(res));
    dispatch(loading.actions.setLoading(false));
  };
  return [simpleRepos, setRepos];
}

const SimpleAsync: VFC = () => {
  const [repos, setRepos] = useSimpleAsync();

  return (
    <Block>
      <h1>SimpleAsync</h1>
      <Button variant="contained" onClick={setRepos}>f-a24 repos</Button>
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

export default SimpleAsync;

const Block = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: aqua;
`;
