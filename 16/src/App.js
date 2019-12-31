import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Toro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName" },
  ];

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi ,I am {props.name} and {props.age} years old.</div>
}

// 型チェック
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired // isRequired は必須チェック defaultPropsがあれば不要
}

User.defaultProps = {
  age: 1,
}

export default App;