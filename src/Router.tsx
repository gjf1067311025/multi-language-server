import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Canvas from './pages/Customization/Canvas';
import ProjectList from './pages/Customization/ProjectList';
import MultiLanguage from './pages/MultiLanguage';

const routes: any[] = [
  {
    path: '/multi-language/list',
    component: MultiLanguage,
  },
  {
    path: '/customization/list',
    component: ProjectList,
  },
  {
    path: '/customization/canvas',
    component: Canvas,
  },
];

const Router = () => (
  <Switch>
    {routes.map(({ path, component }) => (
      <Route key={path} exact={true} path={path} component={component} />
    ))}
    <Redirect from="/" to="/home" />
  </Switch>
 );
 
 export { Router };