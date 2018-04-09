import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export class AdminRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      permission: false
    };
  }

  logout = () => {
    sessionStorage.removeItem('isLogin');
    localStorage.removeItem('isLogin');
    this.setState({ permission: false });
    return <Redirect to="/cart" />
  }

  componentWillMount () {
    let session = sessionStorage.getItem('isLogin');
    let local = localStorage.getItem('isLogin');
    if (session !== null) {
      this.setState({ permission: true });
    } else if (local !== null) {
      this.setState({ permission: true });
    } else {
      this.setState({ permission: false });
    }
  }

  render () {
    if (this.state.permission) {
      return (
        <BrowserRouter
          basename="/admin"
        >
          <Switch>
            <Route exact path="/" component={null} />
            <Route path="/logout" component={this.logout} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <Redirect to="/login" />
      );
    }
  }
}