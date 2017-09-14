import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import Index from './components/index';
import SignIn from './components/signin';
import Logout from './components/logout'
import Register from './components/register';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PostProfile from './components/post_profile';
import ExaminerInformationForm from './components/examiner_form'


export default (
  <MuiThemeProvider>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={PostProfile} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/repinfo/" component={PostsIndex} />
        <Route path="/examiners/" component={ExaminerInformationForm} />
        <Route path="/logout" component={Logout} />
    </Route>
  </MuiThemeProvider>
);
