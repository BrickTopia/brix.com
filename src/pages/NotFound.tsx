
import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for: {location.pathname}
        </p>
        <Link to="/">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center mx-auto">
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
