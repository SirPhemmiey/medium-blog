import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import Post from './components/Post';
import Author from './components/Author';
import NewStory from './components/NewStory';

const Router = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/post" component={Post}/>
            <Route path="/author" component={Author} />
            <Route path="/new-story" component={NewStory}/>
        </Switch>
    </div>
);

export default Router;