import React from 'react';
export default class ContactForm extends React.Component {
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  constructor(params) {
    super(params)
    this.state = {
      title: "Let's talk!",
      loading: false,
      loaded: false,
      email: '',
      buttonText: 'Send'

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    this.setState({
      loading: true,
      buttonText: "Sending..."
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
    this.state.loaded = false;
    this.setState({ email: event.target.value });
  }

  render() {
    return (<div className="content contact-form">
      <h2 className="content-head is-center">Let's talk!</h2>
      <h4 className="content-head is-center">Call me on +358 50 371 3477</h4>

      <h4 className="content-head is-center">Or send a message</h4>

      <form onSubmit={this.handleSubmit} className="pure-form pure-form-stacked float-center">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2">
            <label htmlFor="name">Your Name</label>
            <input required="required" id="name" type="text" name="name" placeholder="Your Name" />
          </div><div className="pure-u-1 pure-u-md-1-2">

            <label htmlFor="email">Your Email</label>
            <input required="required" id="email" type="email" name="email" placeholder="Your Email" />
          </div><div className="pure-u-1 pure-u-md-2-2 pure-u-lg-4-4">
            <label htmlFor="message">Your message</label>
            <textarea id="message" className="pure-input-1" name="message" type="text" placeholder="Your message" />
          </div><div className="pure-u-1">

            <button disabled={this.state.loaded || this.state.loading} type="submit" title={this.state.buttonText} className="pure-button pure-input-1">{this.state.buttonText}</button>

          </div>
          {this.state.loaded ?
            <div className="pure-u-1 is-center">
              <h2 className="content-head is-center">Thanks. I'll get back to you ASAP.</h2></div>
            : null}
        </div>
      </form>

    </div>)
  }
}