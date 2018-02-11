import React from 'react';
import axios from 'axios'
export default class SubscribeRibbon extends React.Component {
  constructor(params) {
    super()
    this.state = {
      loading: false,
      loaded: false,
      email: '',
      buttonText: 'Subscribe'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("/thanks",
      { name: "newsletter", email: this.state.email }
    ).then((data)=>{
      this.state.loaded = true
      this.state.buttonText = "Thanks! I got ya!"
    }).catch(err=>{
      console.log(err)
    })
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }


  render() {
    const vars = this.state
    return (
      <div className="content ribbon">
        <h2 className="content-head content-head-ribbon is-center">Stay tuned!</h2>
        <form name="newsletter" onSubmit={this.handleSubmit} action="/thanks" className="pure-form align-center" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <input type="hidden" name="form-name" value="newsletter" />
          <div className="pure-g">

            <div className="pure-u-1 pure-u-lg-3-5">
              <input className="pure-input-1" type="text" id="email" value={this.state.email}  onChange={this.handleChange} name="email" placeholder="E-mail for newsletter" />
            </div>
            <div className="pure-u-1 pure-u-lg-2-5">
              <button disabled={this.state.loaded} type="submit" title={this.state.buttonText} className="pure-button pure-input-1">{vars.buttonText}</button>
            </div>

          </div>
        </form>
      </div>)
  }
}