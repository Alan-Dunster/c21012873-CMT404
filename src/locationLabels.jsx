// Description: Location labels for the 3rd floor of the building

// Import dependencies from node_modules
import { Text, Html } from '@react-three/drei'

// Import dependencies from local files
import useLevels from './useLevels.jsx'


// Define the LocationLabels component as a default export
export default function LocationLabels() // Start of LocationLabels component body

{ // Start of LocationLabels component body
    
    // Define the following variables and their values
    const currentFloorLevel=useLevels((state) => state.floorLevel) // Define the currentFloorLevel variable as the floorLevel state variable from the useLevels hook
    const locationFront = [-1.57, 0, 0] // Define the locationFront variable as an array of three numbers (the first number is the x-axis rotation, the second number is the y-axis rotation and the third number is the z-axis rotation)
    const locationRear = [-1.57, 0, 3.14]
    const locationRight = [-1.57, 0, 1.57]
    const locationLeft = [-1.57, 0, 4.7]
    const color = "grey" // Define the color variable as a string (the string is the color of the text)
    const fontSize = 0.5 // Define the fontSize variable as a number (the number is the size of the text)
    const secondLinePosition = [0, -0.5, 0] // Define the secondLinePosition variable as an array of three numbers (the first number is the x-axis position, the second number is the y-axis position and the third number is the z-axis position)

// Return the LocationLabels component HTML to the DOM as a child component to the root element
    return <>{/* Add the following components to the DOM as sibling components to each other */}
        
        {currentFloorLevel >= -2.4 && ( // If the currentFloorLevel variable is greater than or equal to -2.4, then add the following components to the DOM as sibling components to each other
        
            <mesh position={ [0, -2.66, 0] }>{/* Add the following components to the DOM as sibling components to each other */}

                <Text // Add the Text component to the DOM as a child component to the mesh component
                    
                    position={ [0, 0, 13.5] } // Set the position of the Text component (the first number is the x-axis position, the second number is the y-axis position and the third number is the z-axis position)
                    rotation={ locationFront } // Set the rotation of the Text component (the first number is the x-axis rotation, the second number is the y-axis rotation and the third number is the z-axis rotation)
                    fontSize={ fontSize } // Set the fontSize of the Text component (the number is the size of the text)
                    color={ color } // Set the color of the Text component (the string is the color of the text)
                
                >{/* Add the following components to the DOM as sibling components to each other */}
                    
                3.01 Meeting{/* Add the following text to the DOM as a child component to the Text component */}

                    <Text // Add the Text component to the DOM as a child component to the Text component
                        
                        position={ secondLinePosition } // Set the position of the Text component (the first number is the x-axis position, the second number is the y-axis position and the third number is the z-axis position)
                        fontSize={ fontSize } // Set the fontSize of the Text component (the number is the size of the text)
                        color={ color } // Set the color of the Text component (the string is the color of the text)
                    
                    >{/* Add the following text to the DOM as a child component to the Text component */}
                
                    16-20 People{/* Add the following text to the DOM as a child component to the Text component */}
                
                    </Text>{/* End of Text component body */}
                
                </Text>{/* End of Text component body */}

                <Text
                    position={ [13.5, 0, 1] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.02 Seminar
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    60 People
                    </Text>
                </Text>

                <Text
                    position={ [10, 0, 13.5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.03 PhD Research
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    6 People
                    </Text>
                </Text>

                <Text
                    position={ [14.6, 0, 14] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.04 Office
                </Text>

                <Text
                    position={ [17.8, 0, 14] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.05 Office
                </Text>

                <Text
                    position={ [21, 0, 14] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.06 Office
                </Text>

                <Text
                    position={ [24, 0, 13.5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3Z04 Niche
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    4 People
                    </Text>
                </Text>

                <Text
                    position={ [23, 0, 5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.07 Visiting Staff
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    4 People
                    </Text>
                </Text>

                <Text
                    position={ [27, 0, 14] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.08 Office
                </Text>

                <Text
                    position={ [30.1, 0, 14] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.09 Office
                </Text>

                <Text
                    position={ [29, 0, 5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.10 Visiting Staff
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    4 People
                    </Text>
                </Text>

                <Text
                    position={ [37, 0, 13.5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.11 Finance
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    6 People
                    </Text>
                </Text>

                <Text
                    position={ [34, 0, 5.5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.12 Research
                </Text>

                <Text
                    position={ [42, 0, 6.3] }
                    rotation={ locationRight }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.13 Office
                </Text>

                <Text
                    position={ [42, 0, 1.8] }
                    rotation={ locationRight }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.14 Exec PA
                </Text>

                <Text
                    position={ [32.7, 0, 0] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.15 Exec Meeting
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    8-12 People
                    </Text>
                </Text>

                <Text
                    position={ [42, 0, -2.4] }
                    rotation={ locationRight }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.16 Office
                </Text>

                <Text
                    position={ [32.7, 0, -5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.Z08 Niche
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    6 People
                    </Text>
                </Text>

                <Text
                    position={ [41.5, 0, -6.5] }
                    rotation={ locationRight }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.Z06 Niche
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    4 People
                    </Text>
                </Text>

                <Text
                    position={ [40.9, 0, -13.7] }
                    rotation={ locationRear }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.17 Office
                </Text>

                <Text
                    position={ [37.6, 0, -13.7] }
                    rotation={ locationRear }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.18 Office
                </Text>

                <Text
                    position={ [34.6, 0, -13.7] }
                    rotation={ locationRear }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.20 Office
                </Text>

                <Text
                    position={ [31.6, 0, -13.7] }
                    rotation={ locationRear }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.22 Office
                </Text>

                <Text
                    position={ [27.4, 0, -2] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.26 PhD Research
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    6 People
                    </Text>
                </Text>

                <Text
                    position={ [22.2, 0, -1.5] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.27 Magic Room
                </Text>

                <Text
                    position={ [-12, 0, 1] }
                    rotation={ locationFront }
                    fontSize={ fontSize }
                    color={ color }
                >
                3.38 Seminar Room
                    <Text
                        position={ secondLinePosition }
                        fontSize={ fontSize }
                        color={ color }
                    >
                    45 People
                    </Text>
                </Text>

            </mesh> // End of mesh component body
        
        )}{/* End of if statement */}
    
    </> // End of sibling components

} // End of LocationLabels component body

// End of file: src/locationLabels.jsx