// LoginForm.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const LoginForm = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const formStyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '5px',
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={toggleTheme}>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
            <form style={formStyle}>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
