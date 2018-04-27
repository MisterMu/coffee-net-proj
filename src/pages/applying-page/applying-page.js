import React from 'react';
import { ApplyForm } from '../../components/';
import './applying-page.scss';

export class ApplyingPage extends React.Component {
  componentDidMount () {
    document.title = 'Join Us';
  }
  render() {
    return (
      <div className="applying-page">
        <section>
          <div className="form">
            <ApplyForm />
          </div>
        </section>
      </div>
    );
  }
}