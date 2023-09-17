// Description: This file contains the Floors component which is a child component of the App component and a sibling of the Walls component

// Import dependencies from node_modules
import { Center, useGLTF } from '@react-three/drei' // Import the Center and useGLTF components from the @react-three/drei dependency (Center is a child component of the useGLTF component) (useGLTF is a hook that loads glTF models)
import { DoubleSide } from 'three' // Import the DoubleSide component from the three dependency (DoubleSide is a peer dependency of r3f)

// import React from 'react' // Import react dependency

// Import dependencies from local files
import useLevels from './useLevels.jsx' // Import the useLevels hook from useLevels.jsx (useLevels is a sibling of the Floors component) (useLevels is a custom hook that manages the floorLevel state)

// Define the Floors component as a default export
export default function Floors() { // Export the Floors component as a default export (this is a child component of the App component) (this is a sibling of the Walls component)

// Define variables for the Floors component (nodes is a child component of the useGLTF hook) (floorLevel is a child component of the useLevels hook)
    const { nodes } = useGLTF('./internalFloors.glb') // Load the glTF model from the specified path (nodes is a child component of the useGLTF hook)
    const floorLevel=useLevels((state) => state.floorLevel) // Get the floorLevel state from the useLevels hook (floorLevel is a child component of the useLevels hook)

// Return the Floors component HTML to the DOM as a child component to the App component
    return ( // Return the following HTML
            <Center position={[0, -0.64, 0.25]} scale={0.35}>{/* Add a Center component to the DOM as a child component to the App component (position the mesh component in the scene at the specified coordinates and scale the Center component to 35% of its original size) */}
            
                <mesh // Add a mesh component to the DOM as a child component to the Center component
                    castShadow // Enable shadow casting for the mesh component
                    receiveShadow // Enable shadow receiving for the mesh component
                    geometry = {nodes.Floors.geometry} // Set the geometry property of the mesh component to the geometry property of the Floors child component of the nodes child component of the useGLTF hook
                >{/* End of mesh component */}
            
                    <meshStandardMaterial side={DoubleSide} color={'white'} clipShadows>{/* Add a meshStandardMaterial component to the DOM as a child component to the mesh component (set the side property of the meshStandardMaterial component to the DoubleSide component and the color property to white and add the clipShadows property) */}
                        <plane attach="clippingPlanes-0" normal={[0, -1, 0]} constant={floorLevel} />{/* Add a plane component to the DOM as a child component to the meshStandardMaterial component (set the normal property of the plane component to the specified coordinates and the constant property to the floorLevel state) */}
                    </meshStandardMaterial>{/* End of meshStandardMaterial component */}
            
                </mesh>{/* End of mesh component */}
            
            </Center> // End of Center component
    ) // End of return statement

} // End of Floors component body

// End of file: src/Floors.jsx