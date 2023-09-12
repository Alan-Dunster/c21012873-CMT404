// Description: This file contains the lights for the scene (this is a child component of the App component)

export default function Lights() // Export the Lights component as a default export (this is a child component of the App component)
{ // Start of Lights component body
  return <>{/* Add the following components to the DOM as sibling components to each other */}
    <ambientLight intensity={0.2} />{/* Add an ambientLight component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components (set the intensity of the ambientLight component to 0.2) */}

    {/* Front Above */}
    <directionalLight // Add a directionalLight component to the DOM as a sibling component to the Walls, Floors, OrbitControls and Lights components
        position={[0, 50, 50]} // Set the position of the directionalLight component in the scene to the specified coordinates (x: 0, y: 50, z: 50)
        intensity={0.5} // Set the intensity of the directionalLight component to 0.5 (this is the brightness of the light)
        castShadow // Enable shadow casting for the directionalLight component
        shadow-mapSize-width={1024} // Set the width of the shadow map to 1024 pixels (the shadow map is used to determine whether a point in the scene is in shadow or not)
        shadow-mapSize-height={1024} // Set the height of the shadow map to 1024 pixels (the shadow map is used to determine whether a point in the scene is in shadow or not)
        shadow-camera-near={1} // Set the near clipping plane of the shadow camera to 1 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
        shadow-camera-far={150} // Set the far clipping plane of the shadow camera to 150 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
        shadow-camera-top={100} // Set the top clipping plane of the shadow camera to 100 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
        shadow-camera-bottom={-150} // Set the bottom clipping plane of the shadow camera to -150 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
        shadow-camera-left={-60} // Set the left clipping plane of the shadow camera to -60 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
        shadow-camera-right={60} // Set the right clipping plane of the shadow camera to 60 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
        shadow-normalBias={1.9} // Set the normal bias of the shadow camera to 1.9 (the shadow camera is used to determine whether a point in the scene is in shadow or not)
    />{/* End of directionalLight component */}

    {/* Rear Above */}
    <directionalLight
        position={[0, 50, -50]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={150}
        shadow-camera-top={100}
        shadow-camera-bottom={-150}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-normalBias={1.9}
    />{/* End of directionalLight component */}
    
    {/* Right Above */}
    <directionalLight
        position={[50, 50, 0]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={150}
        shadow-camera-top={100}
        shadow-camera-bottom={-150}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-normalBias={1.9}
    />{/* End of directionalLight component */}

    {/* Left Above */}
    <directionalLight
        position={[-50, 50, 0]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={150}
        shadow-camera-top={100}
        shadow-camera-bottom={-150}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-normalBias={1.9}
    />{/* End of directionalLight component */}

    {/* Front Low Right Corner */}
    <directionalLight // Add a directionalLight component to the DOM to underlight the ceilings
        position={[40, 12, 20]} // Set the position of the directionalLight component in the scene to the specified coordinates (x: 40, y: 12, z: 20)
        intensity={0.35}
    />{/* End of directionalLight component */}

    {/* Front Low  Left Corner */}
    <directionalLight
        position={[-40, 12, 20]}
        intensity={0.35}
    />{/* End of directionalLight component */}

    {/* Rear Low Right Corner */}
    <directionalLight
        position={[40, 12, -20]}
        intensity={0.35}
    />{/* End of directionalLight component */}

    {/* Rear Low  Left Corner */}
    <directionalLight
        position={[-40, 12, -20]}
        intensity={0.35}
    />{/* End of directionalLight component */}

  </> // End of sibling components

} // End of Lights component body

// End of file: src/Lights.jsx