//import './polyfill';
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import RedBox from "redbox-react";
import DevTools from 'mobx-react-devtools';
import remotedev from 'mobx-remotedev/lib/dev';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Home} from "orion/guide/home";
import {Interactions} from "orion/guide/interactions";
import {UIComponents} from "orion/guide/components";
import {HelpersPage} from "orion/guide/helpers";
import {TypographyPage} from "orion/guide/typography";
import {NavComponent} from "orion/guide/nav";
import {FormsPage} from "orion/guide/forms";
import {NotFound} from "orion/guide/404";

import example_routes from 'orion/examples/routes';

class App extends React.Component {
    render() {
        return <div>
            {this.props.children}
            <DevTools />
        </div>
    }
}
const style_guide_routes = (
    <Route>
        <IndexRoute component={Home}/>
        <Route path="forms" component={FormsPage}/>
        <Route path="interactions" component={Interactions}/>
        <Route path="helpers" component={HelpersPage}/>
        <Route path="components" component={UIComponents}/>
        <Route path="nav" component={NavComponent}/>
        <Route path="typography" component={TypographyPage}/>
    </Route>
);

const routes =(
  <Route path="/" component={App}>
      {style_guide_routes}
      {example_routes}
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