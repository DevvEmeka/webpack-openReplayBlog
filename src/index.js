// import React from `react`;
import { createRoot } from "react-dom/client";

// Get DOM element which will be the container of our React App   
const domNode = document.getElementById('root');              

// Create Root  
const root = createRoot(domNode);

// Render our root component
root.render(<App />);
