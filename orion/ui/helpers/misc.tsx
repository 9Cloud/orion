import * as React from "react";
import {Div} from "./div";
import classNames from "classnames/bind";

// Loading Icon
export const LoadingDiv = (props) => {
    let text = props.text || "Loading ...";
    return (
      <Div centerText><span className="l-spinner"></span>
          <div>{text}</div>
      </Div>
    )
};

export const LoadingDivLarge = (props) => {
    let text = props.text || "Loading ...";
    return (
      <Div centerText className="l-row-gut-2" style={{"fontSize": '3rem', "marginTop": '2em'}}>
          <span style={{width: '100px', height: '100px'}} className="l-spinner"></span>
          <div>{text}</div>
      </Div>);
};

// Regular Icon
export const Icon = (props) => {
    let {onClick, type, color, ...others} = props;

    let iconclasses = classNames({
            'l-secondary--light' : color == "neutral",
            'l-primary-color'   : color == "fancy",
    });

    if ( onClick ) {
        return <a href="" onClick={onClick}><span className={`l-col-gut-sm icon-${props.type} ${iconclasses}`} {...others}/></a>
    }
    else {
        return <span className={`l-col-gut-sm icon-${props.type} ${iconclasses}`} {...others}/>
    }
};

// Horizontal Spacer
export const Spacer = (props) => <div className={`l-clear l-row-gut-${props.size ? props.size : 'half'}`}></div>;

/**
 * Creator: Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
 * @licence MIT

 * @param size
 * @return XML
 */
export const ProgressIcon = ({size = 15}) => (
  <svg width={size} height={size} viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
      <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
              <circle cx="5" cy="50" r="5">
                  <animate attributeName="cy"
                           begin="0s" dur="2.2s"
                           values="50;5;50;50"
                           calcMode="linear"
                           repeatCount="indefinite"/>
                  <animate attributeName="cx"
                           begin="0s" dur="2.2s"
                           values="5;27;49;5"
                           calcMode="linear"
                           repeatCount="indefinite"/>
              </circle>
              <circle cx="27" cy="5" r="5">
                  <animate attributeName="cy"
                           begin="0s" dur="2.2s"
                           from="5" to="5"
                           values="5;50;50;5"
                           calcMode="linear"
                           repeatCount="indefinite"/>
                  <animate attributeName="cx"
                           begin="0s" dur="2.2s"
                           from="27" to="27"
                           values="27;49;5;27"
                           calcMode="linear"
                           repeatCount="indefinite"/>
              </circle>
              <circle cx="49" cy="50" r="5">
                  <animate attributeName="cy"
                           begin="0s" dur="2.2s"
                           values="50;50;5;50"
                           calcMode="linear"
                           repeatCount="indefinite"/>
                  <animate attributeName="cx"
                           from="49" to="49"
                           begin="0s" dur="2.2s"
                           values="49;5;27;49"
                           calcMode="linear"
                           repeatCount="indefinite"/>
              </circle>
          </g>
      </g>
  </svg>
);
