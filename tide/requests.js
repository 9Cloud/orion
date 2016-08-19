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
    same_origin: 'same-origin',     // make include to send cookies on CORS requests too
    include    : 'inlcude'
};

function encode(obj){
    if (obj instanceof URLSearchParams){
        return obj.toString();
    }

    let p = new URLSearchParams();
    for(let name in obj){
        if (obj.hasOwnProperty(name)){
            p.append(name,  obj[name]);
        }
    }
    return p.toString();
}

function decode(string) {
    return new URLSearchParams(string);
}

const DefaultRequestOptions = {

    'content_type': ContentTypes.content_type,

    'method': 'GET',
    'cache': 'default',
    'mode': 'cors',
    'redirect': 'follow',
    'referrer': 'client',
    'referrerPolicy': 'origin-when-cross-origin',
    'credentials': Credentials.same_origin,

    // 'integrity' : subresource integrity value hash
    // 'body'" request body: blob/buffersource/formdata/urlsearchparams/usvstring
};

let log_to_console = true;//(process.env.NODE_ENV === 'development');

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

export function get(uri, queries = null) {
    // todo: think about using URL object for this (IE 10+)
    let query_string = queries ? encode(queries) : "";
    uri = query_string ? `${uri}?${query_string}` : uri;

    return request(uri, {method: 'GET'});
}

export function post(uri, body) {
    body = JSON.stringify(body);
    return request(uri, {method: 'POST', body: body});
}

export function put(uri, body) {
    body = JSON.stringify(body);
    return request(uri, {method: 'PUT', body: body});
}

export function del(uri) {
    return request(uri, {method: 'DELETE'});
}

export function upload(uri, file, __data) {
    //var input = document.querySelector('input[type="file"]')
    //var file = input.files[0];

    const data = new FormData();
    data.append('file', file);

    return request(uri,  {method: 'POST', body: data})
}


/** HTTP Status Codes -----*/
export const status = {
    HTTP_100_CONTINUE: 100,
    HTTP_101_SWITCHING_PROTOCOLS: 101,

    HTTP_200_OK: 200,
    HTTP_201_CREATED: 201,
    HTTP_202_ACCEPTED: 202,
    HTTP_203_NON_AUTHORITATIVE_INFORMATION: 203,
    HTTP_204_NO_CONTENT: 204,
    HTTP_205_RESET_CONTENT: 205,
    HTTP_206_PARTIAL_CONTENT: 206,
    HTTP_207_MULTI_STATUS: 207,

    HTTP_300_MULTIPLE_CHOICES: 300,
    HTTP_301_MOVED_PERMANENTLY: 301,
    HTTP_302_FOUND: 302,
    HTTP_303_SEE_OTHER: 303,
    HTTP_304_NOT_MODIFIED: 304,
    HTTP_305_USE_PROXY: 305,
    HTTP_306_RESERVED: 306,
    HTTP_307_TEMPORARY_REDIRECT: 307,

    HTTP_400_BAD_REQUEST: 400,
    HTTP_401_UNAUTHORIZED: 401,
    HTTP_402_PAYMENT_REQUIRED: 402,
    HTTP_403_FORBIDDEN: 403,
    HTTP_404_NOT_FOUND: 404,
    HTTP_405_METHOD_NOT_ALLOWED: 405,
    HTTP_406_NOT_ACCEPTABLE: 406,
    HTTP_407_PROXY_AUTHENTICATION_REQUIRED: 407,
    HTTP_408_REQUEST_TIMEOUT: 408,
    HTTP_409_CONFLICT: 409,
    HTTP_410_GONE: 410,
    HTTP_411_LENGTH_REQUIRED: 411,
    HTTP_412_PRECONDITION_FAILED: 412,
    HTTP_413_REQUEST_ENTITY_TOO_LARGE: 413,
    HTTP_414_REQUEST_URI_TOO_LONG: 414,
    HTTP_415_UNSUPPORTED_MEDIA_TYPE: 415,
    HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    HTTP_417_EXPECTATION_FAILED: 417,
    HTTP_422_UNPROCESSABLE_ENTITY: 422,
    HTTP_423_LOCKED: 423,
    HTTP_424_FAILED_DEPENDENCY: 424,
    HTTP_428_PRECONDITION_REQUIRED: 428,
    HTTP_429_TOO_MANY_REQUESTS: 429,
    HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    HTTP_500_INTERNAL_SERVER_ERROR: 500,
    HTTP_501_NOT_IMPLEMENTED: 501,
    HTTP_502_BAD_GATEWAY: 502,
    HTTP_503_SERVICE_UNAVAILABLE: 503,
    HTTP_504_GATEWAY_TIMEOUT: 504,
    HTTP_505_HTTP_VERSION_NOT_SUPPORTED: 506,
    HTTP_507_INSUFFICIENT_STORAGE: 507,
    HTTP_511_NETWORK_AUTHENTICATION_REQUIRED: 511
};

export const is_informational = (status) => status >= 100 && status < 200;
export const is_success = (status) => status >= 200 && status < 300;
export const is_redirect = (status) => status >= 300 && status < 400;
export const is_client_error = (status) => status >= 400 && status < 500;
export const is_server_error = (status) => status >= 500 && status < 600;
export const is_error = (status) => is_client_error(status) || is_server_error(status);
