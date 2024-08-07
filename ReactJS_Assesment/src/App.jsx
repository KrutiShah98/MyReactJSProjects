// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import LoginForm from './LoginForm';

function App() {
    return (
        <ThemeProvider>
          <LoginForm/>
        </ThemeProvider>
    );
}

export default App;
