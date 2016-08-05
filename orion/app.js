import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Home} from 'orion/pages/home';
import {ReactComponents} from 'orion/pages/rich';
// import {IntlProvider, addLocaleData} from 'react-intl';
// import en from 'react-intl/locale-data/en';
// addLocaleData(en);

const routes = <Route path='/' component={Home}>
    <Route path="/react" component={ReactComponents}/>
</Route>;

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