import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Home} from 'orion/pages/home';
import {Interactions} from 'orion/pages/interactions';
import {RichComponents} from 'orion/pages/rich';
import {BaseComponents} from 'orion/pages/base';
import {HelpersPage} from 'orion/pages/helpers';
import {FormsPage} from 'orion/pages/forms';
import {NotFound} from 'orion/pages/404';

const routes =(
  <Route path="/">
      <IndexRoute component={Home} />
      <Route path="/forms" component={FormsPage}/>
      <Route path="/interactions" component={Interactions}/>
      <Route path="/helpers" component={HelpersPage}/>
      <Route path="/base" component={BaseComponents}/>
      <Route path="rich" component={RichComponents}/>
      <Route path="*" component={ NotFound }/>
  </Route>
);

class ForceRender extends React.Component {
    componentWillMount() {
        this.forceUpdate();
    }
    
    render() {
        return (
          <Router history={browserHistory}>
              {routes}
          </Router>
        )
    }
}

ReactDOM.render((
  <ForceRender />
), document.getElementById('app'));