// Description: This file contains the App component for the scene, which is the root component of the application and a parent component of the Walls, Floors, OrbitControls and Lights components

// Import dependencies from node_modules
import { OrbitControls } from '@react-three/drei' // Import the OrbitControls component from the @react-three/drei dependency (OrbitControls is a peer dependency of r3f)

// Import dependencies from local files
import Walls from './walls.jsx' // Import the Walls component from Walls.jsx (Walls is a child component of the App component)
import Floors from './floors.jsx' // Import the Floors component from Floors.jsx (Floors is a child component of the App component)
import Lights from './lights.jsx' // Import the Lights component from Lights.jsx (Lights is a child component of the App component)
import LevelLabels from './levelLabels.jsx' // Import the LevelLabels component from levelLabels.jsx (LevelLabels is a child component of the App component)
import LocationLabels from './locationLabels.jsx' // Import the LocationLabels component from locationLabels.jsx (LocationLabels is a child component of the App component)
import Particles from './particles.jsx' // Import the Particles component from particles.jsx (Particles is a child component of the App component)
import WebScreen from './webScreen.jsx' // Import the WebScreen component from WebScreen.jsx (WebScreen is a child component of the App component) 
import Polution from './polution.jsx' // Import the Polution component from polution.jsx (Polution is a child component of the App component)
import Balls from './balls.jsx' // Import the Balls component from balls.jsx (Balls is a child component of the App component)
import PointLights from './pointLights.jsx' // Import the PointLights component from pointLights.jsx (PointLights is a child component of the App component)
import ShadedRoom from './shadedRoom.jsx' // Import the ShadedRoom component from ShadedRoom.jsx (ShadedRoom is a child component of the App component)
import LocationData from './locationData.jsx' // Import the LocationData component from locationData.jsx (LocationData is a child component of the App component)

// Define the App component as a default export
export default function App() { // Start of App component body

// Return the App component HTML to the DOM as a child component to the root element
  return ( // Return the following HTML (this is the root component of the application)
    
    <>{/* Add the following components to the DOM as sibling components to each other */}
    
      <Walls />{/* Add the Walls component to the DOM as a sibling component to the Floors component */}
      <Floors />{/* Add the Floors component to the DOM as a sibling component to the Walls component */}
      <OrbitControls makeDefault/>{/* Add the OrbitControls component to the DOM as a sibling component to the Walls component (make the OrbitControls component the default camera controls) */}
      <Lights />{/* Add the Lights component to the DOM as a sibling component to the Walls, Floors and OrbitControls components */}
      <LevelLabels />{/* Add the LevelLabels component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <LocationLabels />{/* Add the LocationLabels component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <Particles />{/* Add the Particles component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <WebScreen />{/* Add the WebScreen component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <Polution />{/* Add the Polution component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <Balls />{/* Add the Balls component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <PointLights />{/* Add the PointLights component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <ShadedRoom />{/* Add the ShadedRoom component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <LocationData />{/* Add the LocationData component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components */}
      <color args={ ['#555555']} attach="background" />{/* Add a color component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components (set the color of the color component to #555555) */}
    
    </> // End of sibling components
  
  ) // End of return statement

} // End of App component body

// End of file: src/App.jsx