
class RadioButton extends Component {
  // look at checked

  render() {
    return (
      <FormElement>
        <input class="l-radio" type="radio" name="hello" /> <label>{this.props.label}</label>
      </FormElement>
    )
  }
}


class Select extends Component{
  // look at selected
  // change to value; changes li selected and option

  render(){
    let selected_option = {name: 1, value: 2};

    return(
      <FormElement>
        <div className="l-select-wrapper">
          <select className="l-select l-fullwidth" value={selected_option.value}>
            <option value={selected_option.value}>{selected_option.name}</option>
          </select>
          <div className="l-select-dd l-fullwidth">
            <ul>
              {this.props.options.map(({name, value}) => <li key={value}> {name} </li>)}
            </ul>
          </div>
        </div>
      </FormElement>
    )
  }
}


class FormErrors {
  deserialize() {
    /*
     Expected format:

     {"sender": [{"message": "Enter a valid email address.", "code": "invalid"}],
     "subject": [{"message": "This field is required.", "code": "required"}]}
     */
  }

  propTypes = {
    errors: mobxReact.propTypes.arrayOrObservableArray(
      React.PropTypes.shape({
        'message': React.PropTypes.string
      })
    ).isRequired
  };

  render() {
    return this.props.errors.map((err, i) => <Error key={i}>{err.message}</Error>)
  }
}

