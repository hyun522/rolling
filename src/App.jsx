import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

const MessagePage = lazy(() => import('./pages/CreateMessagePage'));
const PaperPage = lazy(() => import('./pages/CreatePaperPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const MessageListPage = lazy(() => import('./pages/MessageListPage'));
const PaperListPage = lazy(() => import('./pages/PaperListPage'));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>로딩중...</div>}>
        <Router>
          <Routes>
            <Route path="/" Component={HomePage} exact />
            <Route path="/list" Component={PaperListPage} exact />
            <Route path="/post">
              <Route index Component={PaperPage} />
              <Route path=":id" Component={MessageListPage} />
              <Route path=":id/edit" Component={MessageListPage} />
              <Route path=":id/message" Component={MessagePage} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
