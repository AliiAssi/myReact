Routing in React allows you to navigate between different components or pages in your application. React Router is a popular library for handling routing in React applications. Here's a guide to set up basic routing using React Router.

### 1. **Install React Router**

First, you'll need to install the React Router library. You can do this via npm or yarn:

```bash
npm install react-router-dom
```

### 2. **Set Up Basic Routing**

You’ll need to wrap your application in a `BrowserRouter` and define routes using the `Routes` and `Route` components.

Here's an example of a basic React application with routing:

**App.js**

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 3. **Create Your Pages**

Define the components for each route. For example:

**Home.js**

```javascript
import React from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

**About.js**

```javascript
import React from 'react';

function About() {
  return <h1>About Page</h1>;
}

export default About;
```

**Contact.js**

```javascript
import React from 'react';

function Contact() {
  return <h1>Contact Page</h1>;
}

export default Contact;
```

### 4. **Add Navigation**

Add navigation links to allow users to switch between pages.

**Navbar.js**

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

### 5. **Styling (Optional)**

You can add styling to your components and navigation links to enhance the appearance. Tailwind CSS or custom CSS can be used for this purpose.

### 6. **Handling Not Found Pages**

You might want to handle routes that don’t match any defined paths:

**App.js**

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import NotFound from './NotFound'; // New component for handling 404 errors

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 errors */}
      </Routes>
    </Router>
  );
}

export default App;
```

**NotFound.js**

```javascript
import React from 'react';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

### Summary

- **Installation**: Install `react-router-dom`.
- **Router Setup**: Wrap your application in `BrowserRouter` and define routes.
- **Page Components**: Create components for each route.
- **Navigation**: Use `Link` components for navigation.
- **Error Handling**: Add a fallback route for unmatched paths.