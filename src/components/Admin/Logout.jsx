//react functional component for logout
//

import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };
    return (
        <div>
        <button onClick={logout}>Logout</button>
        </div>
    );
    }
export default Logout;
