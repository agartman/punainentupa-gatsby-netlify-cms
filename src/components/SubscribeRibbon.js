import React from 'react';
export default class SubscribeRibbon extends React.Component {
  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  constructor(params) {
    super(params)
    this.state = {
      loading: false,
      loaded: false,
      email: '',
      buttonText: 'Subscribe'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    this.state.loading = true;
    this.state.buttonText = "Subscribing...";
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "newsletter",
        "email": this.state.email
      })
    })
      .then(() => {
        this.state.loaded = true;
        this.state.loading = false;
        this.state.buttonText = "Thanks! I got ya! VIP list updated.";
      })
      .catch(error => {
        console.log(error)
        this.state.loaded = true;
        this.state.loading = false;
        this.state.buttonText = "Error occured.";
      }
    );

    e.preventDefault();
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }


  render() {
    const vars = this.state
    return (
      <div className="content ribbon">
        <h2 className="content-head content-head-ribbon is-center">Stay tuned!</h2>
        <form onSubmit={this.handleSubmit} className="pure-form align-center">
          <div className="pure-g">

            <div className="pure-u-1 pure-u-lg-3-5">
              <input className="pure-input-1" type="text" id="email" value={vars.email} onChange={this.handleChange} name="email" placeholder="E-mail for newsletter" />
            </div>
            <div className="pure-u-1 pure-u-lg-2-5">
              <button disabled={vars.loaded || vars.loading} type="submit" title={vars.buttonText} className="pure-button pure-input-1">{vars.buttonText}</button>
            </div>

          </div>
        </form>
      </div>)
  }
}