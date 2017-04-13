import React, {PropTypes} from 'react';
import Hobby from './Hobby';

// const propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// };

class Profile1 extends React.Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.state = {count: 0, hobbies: []};
    this.likeMe = this.likeMe.bind(this);
    this.addHobby = this.addHobby.bind(this);
  }

  componentDidMount() {
    // 组件加载完成1秒之后，使 count 自动加1
    setTimeout(() => {
      this.likeMe();
    }, 1000);
  }

  likeMe() {
    let count = this.state.count;
    count += 1;
    console.log(count);
    this.setState({count});
  }

  addHobby() {
    let hobbyInput = this.refs.hobby;
    let val = hobbyInput.value;
    if (val) {
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies, val];

      this.setState({
        hobbies
      }, () => {
        hobbyInput.value = '';
      });
    }
    console.log(this.state.hobbies);
  }

  render() {
    return (
      <div className="profile-component">
        {/* this.pros 是传入的属性 */}
        <h1>my name is { this.props.name }</h1>
        <h2>my age is { this.props.age }</h2>
        <button onClick={this.likeMe}>Like Me</button>
        <h2>Like Me Count: { this.state.count }</h2>

        <h2>My Hobbies</h2>
        <ul>
          { this.state.hobbies.map((hobby, i) => {
            return <Hobby hobby = {hobby} />;
          }) }
        </ul>
        <input type="text" ref="hobby"/>
        <button onClick={ this.addHobby }>Add Hobby</button>
      </div>
    );
  }
}
const Profile = Profile1;
// Profile1.propTypes = propTypes;
export default Profile;
