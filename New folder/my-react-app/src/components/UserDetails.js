import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ user, repos, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired
};

export default UserDetails;
