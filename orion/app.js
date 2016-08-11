//import './polyfill';
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import RedBox from "redbox-react";
import DevTools from 'mobx-react-devtools';
import remotedev from 'mobx-remotedev/lib/dev';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Home} from "orion/pages/home";
import {Interactions} from "orion/pages/interactions";
import {BaseComponents} from "orion/pages/base";
import {HelpersPage} from "orion/pages/helpers";
import {TypographyPage} from "orion/pages/typography";
import {NavComponent} from "orion/pages/nav";
import {FormsPage} from "orion/pages/forms";
import {NotFound} from "orion/pages/404";

class App extends React.Component {
    render() {
        return <div>
            {this.props.children}
            <DevTools />
        </div>
    }
}

const routes =(
  <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="forms" component={FormsPage}/>
      <Route path="interactions" component={Interactions}/>
      <Route path="helpers" component={HelpersPage}/>
      <Route path="base" component={BaseComponents}/>
      <Route path="nav" component={NavComponent}/>
      <Route path="typography" component={TypographyPage}/>
      <Route path="*" component={ NotFound }/>
  </Route>
);

class ForceRender extends React.Component {
    componentWillMount() {
        this.forceUpdate();
    }

    render() {
        if(this.props.server){
            return <Home />
        }

        return (
          <Router history={browserHistory}>
              {routes}
          </Router>
        )
    }
}

function render(component) {
    ReactDOM.render(component, document.getElementById('app'));
}

export function client(mode){
    if (mode == "development" && false) {
        try {
            render(<ForceRender server={false} />);
        } catch (e) {
            render(<RedBox error={e}/>);
        }
    } else {
        render(<ForceRender server={false}/>);
    }
}

export function server(mode){
    return ReactDOMServer.renderToString(
      <ForceRender server={true} />
    );
}

export function __reload(exports){
    this.client("development");
    console.info("Reloading...");
}