// Description: This file contains the Walls component which is a child component of the App component and a sibling of the Floors component

// Import dependencies from node_modules
import { Center, useGLTF } from '@react-three/drei' // Import the Center and useGLTF components from the @react-three/drei dependency (Center is a child component of the useGLTF component) (useGLTF is a hook that loads glTF models)

// Import dependencies from local files
import useLevels from './useLevels.jsx' // Import the useLevels hook from useLevels.jsx (useLevels is a sibling of the Walls component) (useLevels is a custom hook that manages the wallLevel state)

// Define the Walls component as a default export
export default function Walls() // Export the Walls component as a default export (this is a child component of the App component) (this is a sibling of the Floors component)

{ // Start of Walls component body

// Define variables for the Walls component (nodes is a child component of the useGLTF hook) (wallLevel is a child component of the useLevels hook)
    const { nodes } = useGLTF('./internalWalls.glb') // Load the glTF model from the specified path (nodes is a child component of the useGLTF hook)
    const wallLevel=useLevels((state) => state.wallLevel) // Get the wallLevel state from the useLevels hook (wallLevel is a child component of the useLevels hook)

// Return the Walls component HTML to the DOM as a child component to the App component
    return ( // Return the following HTML
        
        <Center scale={0.35}>{/*Add a Center component to the DOM as a child component to the App component (scale the Center component to 35% of its original size) */}  
        
            <mesh // Add a mesh component to the DOM as a child component to the Center component
                receiveShadow // Enable shadow receiving for the mesh
                geometry = {nodes.Interior.geometry} // Set the geometry property of the mesh component to the geometry property of the Interior child component of the nodes child component of the useGLTF hook
            >{/* End of mesh component */}
                
                <meshStandardMaterial color="lightgreen">{/* Add a meshStandardMaterial component to the DOM as a child component to the mesh component (set the color property of the meshStandardMaterial component to lightgreen) */}
                        <plane attach="clippingPlanes-0" normal={[0, -1, 0]} constant={wallLevel} />{/* Add a plane component to the DOM as a child component to the meshStandardMaterial component (set the normal property of the plane component to the specified coordinates and the constant property to the wallLevel state) */}
                </meshStandardMaterial>{/* End of meshStandardMaterial component */}
        
            </mesh>{/* End of mesh component */}
        
        </Center> // End of Center component
    
    ) // End of return

} // End of Walls component

// End of file: src/Walls.jsx