import {InvalidResponse} from './error';

/*

Note: A critical assumption made is that the backend speaks JSON so these functions send/receive JSON only!

 */
const ContentTypes = {
    json: "application/json",
    html: "text/html",
    text: "text/plain"
};

const Credentials = {
    same_origin: 'same-origin',
    include    : 'inlcude'
};

const DefaultRequestOptions = {
    'credentials': Credentials.same_origin,
    'content_type': ContentTypes.content_type,
    'method': 'GET',
    'cache': 'default',
    'mode': 'cors'
};

let log_to_console = true;//(process.env.NODE_ENV === 'development');


const join_query_string = (queries) => {
    let query_string = "";
    let query_array = [];
    
    if (queries) {
        for (name in queries) {
            if (!queries.prototype.hasOwnProperty(name)) {
                continue;
            }
            
            value = queries[name];
            query_array.push(`${name}=${value}`);
        }
    }
    
    query_string = query_array.join('&');
    
    return queries
};

const _log_response = (response) => {
    if (log_to_console) {
        console.log("Request Returned", {
            'ContentType': response.headers.get('Content-Type'),
            'Status'     : response.status,
            "StatusText" : response.statusText
        });
    }
    
    return response;
};

export function request(url, options) {
    let o = {...DefaultRequestOptions, ...options};
    
    let headers = new Headers({
        "Content-Type": options.content_type,
        "Accept"      : options.content_type
    });
    
    return fetch(url, {
        method     : o.method,
        mode       : o.mode,
        cache      : o.cache,
        headers    : headers,
        credentials: o.credentials,
        body       : o.body
    })
      .then((response) => _log_response(response))
      .then((response) => {
          if (response.ok) {
              return response.json()
          }
          else {
              throw new InvalidResponse(response);
          }
      })
}

// todo: look at HTTPoison + Request (python) and figure out a real API here

export function get(url, queries = null) {
    if(queries){
        qs = join_query_string(queries);
        url = url + '?' + qs;
    }
    
    return request(url, {method: 'GET'});
}

export function post(url, body) {
    body = JSON.stringify(body);
    return request(url, {method: 'POST', body: body});
}

export function put(url, body) {
    body = JSON.stringify(body);
    return request(url, {method: 'PUT', body: body});
}

export function del(url) {
    return request(url, {method: 'DELETE'});
}