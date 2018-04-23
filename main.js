import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,exact} from 'react-router-dom';
import A from './src/a/a';
import B from './src/b/b';
import Ind from './src/index';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Ind} />
			<Route path="/a" component={A} />
			<Route path="/b" component={B} />
        </div>
    </BrowserRouter>
),document.getElementById('content'));