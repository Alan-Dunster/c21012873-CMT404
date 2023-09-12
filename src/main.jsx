// Description:
// This file contains the main entry point for the application (this is the first file that is executed when the application is run).
// The main page is the page that appears when the user opens the application.
// It contains the title and the Interface buttons.
// It also contains the Canvas with the App element that is used to render the model on the screen.

// Import dependencies from node_modules
import React from 'react' // Import the React component from the react dependency (React is a peer dependency of r3f)
import ReactDOM from 'react-dom/client' // Import the ReactDOM component from the react-dom dependency (ReactDOM is a peer dependency of r3f)
import { Canvas } from '@react-three/fiber' // Import the Canvas component from the @react-three/fiber dependency (Canvas is a peer dependency of r3f)

// Import dependencies from local files
import './main.css' // Import the index.css file (this is a sibling of the App and Interface components)
import App from './App.jsx' // Import the App component from App.jsx (App is a sibling of the Interface component)
import Interface from './interface.jsx' // Import the Interface component from Interface.jsx (Interface is a sibling of the App component)

// Render the App component to the DOM
ReactDOM.createRoot(document.getElementById('root')).render( // Render the App component to the DOM as a child component to the root element
  
  <React.StrictMode>{/* Enable strict mode for debugging purposes */}
  
    <Canvas // Add the Canvas component to the DOM as a sibling component to the Interface component
      
      shadows // Enable shadow rendering for the scene (shadows are disabled by default)
      
      camera={{ // Set the camera properties for the scene (the camera is a child component of the Canvas component)
        fov: 50, // Field of view (how much of the scene is visible at once) in degrees (50 is a good default)
        near: 0.1, // Near clipping plane (how close to the camera objects can be before they are no longer rendered)
        far: 500, // Far clipping plane (how far from the camera objects can be before they are no longer rendered)
        position: [ 10, 50, 60 ] // Position the camera in the scene (x, y, z) coordinates
      }} // End of camera properties
      
      gl={{ localClippingEnabled: true }} // Enable local clipping for the scene (local clipping is disabled by default)
    
    >{/* End of Canvas component */}

      <App />{/* Wrap the App component in the Canvas component as a child component of the Canvas component  */}
    
    </Canvas>{/* End of Canvas component */}
    
    <Interface />{/* Add the Interface component to the DOM as a sibling component to the Canvas component */}
  
  </React.StrictMode> // End of React.StrictMode

) // End of ReactDOM.createRoot().render()

// End of file: src/index.jsx