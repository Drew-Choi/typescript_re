import Main from 'client_Main/Main';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App(): React.JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
