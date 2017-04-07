import React from 'react';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile-component">
        {/* this.pros 是传入的属性 */}
        <h1>my name is { this.props.name }</h1>
        <h2>my age is { this.props.age }</h2>
      </div>
    );
  }
}
