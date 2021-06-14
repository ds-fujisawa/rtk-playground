import React, { VFC } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import QueryAsync from './examples/QueryAsync';
import SimpleAsync from './examples/SimpleAsync';
import ThunkAsync from './examples/ThunkAsync';

const App: VFC = () => {
  const { loading } = useSelector(( state: RootState ) => state);
  
  return (
    <Area>
      <SimpleAsync />
      <ThunkAsync />
      <QueryAsync />
      <ProgressDialog fullScreen open={loading}>
        <CircularProgress />
      </ProgressDialog>
    </Area>
  );
}

export default App;

const Area = styled.div`
  display: flex;
  padding: 1rem;
`;

const ProgressDialog = styled(Dialog)`
  z-index: 1500 !important;
  > div {
    background-color: rgba(255, 255, 255, 0.2);
    > div {
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% - 20px);
      background-color: transparent;
      box-shadow: none;
    }
  }
`;