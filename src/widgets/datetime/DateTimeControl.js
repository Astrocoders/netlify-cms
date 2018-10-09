import React from 'react';
import { DateControl } from '../date';

export default class DateTimeControl extends React.Component {
  render() {
    return <DateControl {...this.props} includeTime />;
  }
}
