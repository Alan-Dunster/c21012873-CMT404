// Description: This file contains the useLevels hook which is a child component of the Floors and Walls components (useLevels is a custom hook that manages the floorLevel and wallLevel states)

// Import dependencies from node_modules
import { create } from 'zustand' // Import the create function from the zustand dependency (create is a function that creates a store hook) (zustand is a peer dependency of r3f)

// Define the useLevels hook as a default export
export default create((set) => // The create function takes a set function as an argument
{ // Start of useLevels hook body
    return { // Return the following object
            floorLevel: 16, // Set the floorLevel state to 16 (this is the default value of the floorLevel state)
            wallLevel: 17, // Set the wallLevel state to 17 (this is the default value of the wallLevel state)

// Define functions for the useLevels hook (these functions are used to set the floorLevel and wallLevel states)
            level6: () => // Define the level6 function (this is the roof)
            { // Start of level6 function body
                set(() => // The set function takes a function as an argument
                { // Start of set function body (this function sets the floorLevel and wallLevel states)
                    return { floorLevel: 16, wallLevel: 17 } // Set the floorLevel and wallLevel states to 16 and 17 respectively
                }) // End of set function body
            }, // End of level6 function body

            level5: () => // Define the level5 function (this is the 5th floor)
            {
                set(() =>
                {
                    return { floorLevel: 7, wallLevel: 10.5 }
                })
            },
            
            level4: () => // Define the level4 function (this is the 4th floor)
            {
                set(() =>
                {
                    return { floorLevel: 2, wallLevel: 6 }
                })
            },
            
            level3: () => // Define the level3 function (this is the 3rd floor)
            {
                set(() =>
                {
                    return { floorLevel: -2.4, wallLevel: 1.7 }
                })
            },
            
            level2: () => // Define the level2 function (this is the 2nd floor)
            {
                set(() =>
                {
                    return { floorLevel: -7, wallLevel: -2.8 }
                })
            },
    
            level1: () => // Define the level1 function (this is the 1st floor)
            {
                set(() =>
                {
                    return { floorLevel: -11.3, wallLevel: -7.4 }
                })
            },
    
            level0: () => // Define the level0 function (this is the ground floor)
            {
                set(() =>
                {
                    return { floorLevel: -16, wallLevel: -11.7 }
                })
            }
        }
})