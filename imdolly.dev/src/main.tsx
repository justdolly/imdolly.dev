import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set page title
document.title = "dev's Portfolio | Modern Web Development";

// Add meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Personal portfolio website of dev, showcasing modern web development projects and technical expertise.';
document.head.appendChild(metaDescription);

// Handle GitHub Pages redirect
const handleGitHubPagesRedirect = () => {
  const redirectPath = sessionStorage.getItem('redirect');
  if (redirectPath) {
    sessionStorage.removeItem('redirect');
    // Use the navigate function from wouter to navigate to the correct route
    window.history.replaceState(null, "", redirectPath);
    return redirectPath;
  }
  return null;
};

// Call the function before rendering
const redirectPath = handleGitHubPagesRedirect();

// Render the App
createRoot(document.getElementById("root")!).render(<App initialPath={redirectPath} />);
