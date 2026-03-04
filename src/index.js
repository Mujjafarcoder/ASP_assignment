import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectRoutes from './projectRoutes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function RootApp() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return React.cloneElement(projectRoutes,  { theme, setTheme });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);


