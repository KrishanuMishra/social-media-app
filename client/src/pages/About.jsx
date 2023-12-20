import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function About() {

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  var heading = 800;
  var content = 700;
  var theme = 100;

  if (isDarkTheme) {
    heading = content = 100;
    theme = 950;
  }

  return (
    <div className={`bg-slate-${theme} h-screen`}> 
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className={`text-3xl font-bold  mb-4 text-slate-${heading}`}>About</h1>
      <p className={`mb-4 text-slate-${content}`}>
        This is a MERN (MongoDB, Express, React, Node.js) stack application with
        authentication. It allows users to sign up, log in, and log out, and
        provides access to protected routes only for authenticated users.
      </p>
      <p className={`mb-4 text-slate-${content}`}>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <p className={`mb-4 text-slate-${content}`}>
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack. Feel free to
        use it as a template for your own projects!
      </p>
    </div>
    </div>
  );
}
