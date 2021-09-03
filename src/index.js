import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTING MODULES
import Routing from './components/example/route1';
import Same_path from './components/example/same_path';
import Nested_route from './components/example/nested_components';
import Navlinks from './components/navlink/navlink.js';
import Navlink_obj from './components/navlink/navlink2';
import Redirects from './components/redirect/redirects';
import History from './components/hooks/history';
import Params from './components/hooks/useparams';
import Location from './components/hooks/uselocation';
import Project from './components/hooks/project/home_page';

//ReactDOM.render(<Routing />,document.getElementById('root'));
//ReactDOM.render(<Same_path /> , document.getElementById('root'));
//ReactDOM.render(<Nested_route />,document.getElementById('root'));

//ReactDOM.render(<Navlinks />,document.getElementById('root'));

//ReactDOM.render(<Navlink_obj />,document.getElementById('root'));

ReactDOM.render(<Redirects />,document.getElementById('root'));

//ReactDOM.render(<History />,document.getElementById('root'));
//ReactDOM.render(<Params />,document.getElementById('root'));
//ReactDOM.render(<Location />,document.getElementById('root'));

//ReactDOM.render(<Project />,document.getElementById('root'));