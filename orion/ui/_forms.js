
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


class Checkbox extends Component{
  // look at checked

  render() {
    return (
      <FormElement>
        <input className="l-checkbox" type="checkbox"/><label>Check me!</label>
      </FormElement>
    )
  }
}

class TextArea extends Component{
  render() {
    return (
      <FormElement>
        <label>{this.props.label}</label>
        <textarea className="l-textarea l-fullwidth" placeholder={this.props.placeholder}></textarea>
      </FormElement>
    )
  }
}

class WhiteTextArea extends Component{
  // look at value

  render(){
    return(
      <FormElement>
        <label>{this.props.label}</label> <textarea className="l-textarea l-inverse"></textarea>
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
    errors: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        'message': React.PropTypes.string
      })
    ).isRequired
  };
  
  render() {
    return this.props.errors.map((err, i) => <Error key={i}>{err.message}</Error>)
  }
}

