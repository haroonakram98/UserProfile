import React from 'react';
import '../../src/App.css'

const projects = [
  { id: 1, name: 'Project 1', description: 'Description of Project 1' },
  { id: 2, name: 'Project 2', description: 'Description of Project 2' },
  { id: 3, name: 'Project 3', description: 'Description of Project 3' },
];

const UserProfile = ({ username, bio }) => {
  return (
    <div className="user-profile">
      <div className="user-info">
        <h2>{username}</h2>
        <p>{bio}</p>
      </div>
      <div className="projects-list">
        <h3>Projects</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;