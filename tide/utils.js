const ReactPropertyNames = [
    "constructor", "render", "getChildContext", "componentWillMount", "componentDidMount", "shouldComponentUpdate",
    "componentDidUpdate", "componentWillUnmount", "setState", "forceUpdate", "replaceState", "isMounted", "setProps",
    "replaceProps", "getDOMNode"
];

export const _bindAll = (obj, ...args) => {
    // Bind all functions declared within the prototype (not the object itself)
    let arr = [];
    
    let prototype  = Object.getPrototypeOf(obj);
    let properties = Object.getOwnPropertyDescriptors(prototype);
    
    for (var name in properties) {
        let description       = properties[name];
        let is_not_react_prop = !ReactPropertyNames.includes(name);
        let is_not_computed   = description.get !== undefined || description.set == undefined;
        let is_function       = description.value instanceof Function;
        
        if (is_function && is_not_react_prop && is_not_computed) {
            obj[name] = description.value.bind(obj, ...args);
            arr.push(name);
        }
    }
};

/**
 * Merge a bare object (obj) with a mobx object (target)
 * Preseve keys if possible
 * @param target
 * @param obj
 * @returns {*}
 * @private
 */
export function deep_merge_mobx(target, obj) {
    for (var key in obj) {
        // Escape if key isn't part local
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            continue;
        }
        
        var newVal = obj[key];
        
        
        if (!target[key]) {
            // The value isn't already existing
            target[key] = obj[key];
        }
        else if (Array.isArray(newVal)) {
            // Arrays
            target[key] = target[key].concat(newVal);
        }
        else if (newVal instanceof Object) {
            // Objects
            deep_merge_mobx(target[key], newVal);
        }
        else {
            // Assign boxed paramaters
            target[key] = newVal;
        }
    }
    return target;
}