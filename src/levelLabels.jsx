// Note: This file defines the LevelLabels component which is used to display the current floor level in the scene (the LevelLabels component is a child component of the App component)
// Descrition: This file contains the LevelLabels component for the scene, which is a child component of the App component and a parent component of the Html component (from the @react-three/drei dependency)

// Import dependencies from node_modules
import { Html } from "@react-three/drei" // Import the Html component from the @react-three/drei dependency (Html is a peer dependency of r3f)

// Import dependencies from local files
import "./levelLabels.css" // Import the levelLabels.css file (this file contains the CSS for the LevelLabels component)
import useLevels from "./useLevels.jsx" // Import the useLevels hook from useLevels.jsx (this hook is used to set the current floor level)


export default function LevelLabels() // Define the LevelLabels component as a default export

{ // Start of LevelLabels component body

    // Define the currentFloorLevel variable and set it to the floorLevel state variable from the useLevels hook
    const currentFloorLevel=useLevels((state) => state.floorLevel) // Set the currentFloorLevel variable to the floorLevel state variable from the useLevels hook (this variable is used to set the current floor level)

    // Return the LevelLabels component HTML to the DOM as a child component to the App component
    return <>{/* Add the following components to the DOM as sibling components to each other */}
                
                {currentFloorLevel === 16 && ( // If the currentFloorLevel variable is equal to 16 then add the following component to the DOM as a sibling component to the App component
                
                    <mesh position={ [-2, 15, -20] }>{/* Add the following component to the DOM as a child component to the mesh component (set the position of the mesh component to [-2, 15, -20]) */}
                        
                        <Html distanceFactor={50}>{/* Add the following component to the DOM as a child component to the mesh component (set the distanceFactor of the Html component to 50) */}
                            
                            <div className="level-label">Roof{/* Add the following HTML to the DOM as a child component to the div component (set the className of the div component to level-label) */}
                            
                                <div className="text">The Roof level has an example of an external website displayed with live interactive weather data for the Cardiff area.</div>{/* Add the following HTML to the DOM as a child component to the div component (set the className of the div component to text) */}
                            
                            </div>{/* End of div component */}
                    
                        </Html>{/* End of Html component */}
                    
                    </mesh> // End of mesh component
                
                )}{/* End of if statement */}

                {currentFloorLevel === 7 && (
                    <mesh position={ [-2, 8.1, -20] }>
                        <Html distanceFactor={50}>
                            <div className="level-label">Floor 5
                                <div className="text">Floor 5 has an example of floating particles representing pollen count in a room.</div>
                            </div>
                        </Html>
                    </mesh>
                )}

                {currentFloorLevel === 2 && (
                    <mesh position={ [-2, 3.8, -20] }>
                        <Html distanceFactor={50}>
                            <div className="level-label">Floor 4
                                <div className="text">This floor has examples of spheres in rooms representing different conditions by colour and volumes by size of sphere.</div>
                            </div>
                        </Html>
                    </mesh>
                )}

                {currentFloorLevel === -2.4 && (
                    <mesh position={ [-2, -0.5, -20] }>
                        <Html distanceFactor={50}>
                            <div className="level-label">Floor 3
                                <div className="text">Here IoT sensor data is displayed when the cursor hovers over the location lable for Seminar Room 3.38 on this floor.</div>
                            </div>
                        </Html>
                    </mesh>
                )}

                {currentFloorLevel === -7 && (
                    <mesh position={ [-2, -5, -20] }>
                        <Html distanceFactor={50}>
                            <div className="level-label">Floor 2
                                <div className="text">Rooms on this floor use lights of different intensity and colour to indicate a measure, which could be tempreture from IoT sensors in the rooms.</div>
                            </div>
                         </Html>
                    </mesh>
                )}

                {currentFloorLevel === -11.3 && (
                    <mesh position={ [-2, -9.5, -20] }>
                        <Html distanceFactor={50}>
                            <div className="level-label">Floor 1
                                <div className="text">On this floor a room has a coloured transparent plane placed over it that can be set to different levels of opacity to represent humidity for example. </div>
                            </div>
                        </Html>
                    </mesh>
                )}

                {currentFloorLevel === -16 && (
                    <mesh position={ [-2, -14, -20] }>
                        <Html distanceFactor={50}>
                            <div className="level-label">Ground
                             <div className="text">Within the lobby of the ground floor pale yelllow animated coulds represent levels of sulphur-dioxide from traffic polution entering the building and detected by IoT sensors.</div>
                            </div>
                        </Html>
                    </mesh>
                )}
            
            </>// End of LevelLabels component HTML

} // End of LevelLabels component body

// End of file: src/levelLabels.jsx