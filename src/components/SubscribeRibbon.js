import React from 'react';
export default class SubscribeRibbon extends React.Component {
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  constructor(params) {
    super(params)
    this.state = {
      title: "Stay tuned!",
      loading: false,
      loaded: false,
      email: '',
      buttonText: 'Subscribe'

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    this.setState({
      loading: true,
      buttonText: "Subscribing..."
    })
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "newsletter",
        "email": this.state.email
      })
    })
      .then(() => {
        this.setState({
          loading: false,
          loaded: true,
          title: "Thanks! I got ya! VIP list updated.",
          buttonText: "Done"
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loading: false,
          loaded: true,
          buttonText: "Error occured, oops."
        })
      }
      );

  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="content ribbon">
        <h2 className="content-head content-head-ribbon is-center">{this.state.title}</h2>
        <form onSubmit={this.handleSubmit} className="pure-form align-center">
          <div className="pure-g">
            {!this.state.loaded ? <div>
            <div className="pure-u-1 pure-u-lg-3-5">
              <input required="required" className="pure-input-1" type="email" id="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="E-mail for newsletter" />
            </div> 

            <div className="pure-u-1 pure-u-lg-2-5">
              <button disabled={this.state.loaded || this.state.loading} type="submit" title={this.state.buttonText} className="pure-button pure-input-1">{this.state.buttonText}</button>
            </div></div>
            : null}

          </div>
        </form>
      </div>)
  }
}