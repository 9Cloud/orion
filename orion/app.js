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
// import {IntlProvider, addLocaleData} from 'react-intl';
// import en from 'react-intl/locale-data/en';
// addLocaleData(en);

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

class RenderForcer extends React.Component {
    componentWillMount() {
        // a little hack to help us re-render when this module is reloaded
        this.forceUpdate();
    }
    
    // render() {
    //     return <IntlProvider locale='en'>
    //         <Router history={browserHistory}>
    //             {routes}
    //         </Router>
    //     </IntlProvider>
    // }
    render() {
        return (
          <Router history={browserHistory}>
              {routes}
          </Router>
        )
    }
}

export function bootstrap(){
    ReactDOM.render((
      <RenderForcer />
    ), document.getElementById('app'));
}

export function __reload(exports) {
    this.bootstrap();
    console.info("Hot Reloaded...")
}

export default bootstrap;