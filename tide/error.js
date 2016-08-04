export class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name    = this.constructor.name;
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

class TideError extends ExtendableError {
    constructor(message) {
        super(message);
    }
}

export class InvalidResponse extends TideError {
    constructor(response) {
        super("Status: " + response.statusText);
        this.response = response;
    }
}

// throw new InvalidResponse('My message')