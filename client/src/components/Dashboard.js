import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div>
        <Link to="/surveys/new">
          ADD
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;