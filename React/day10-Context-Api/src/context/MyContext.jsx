import { createContext } from "react";
import { useState } from "react";

// create black store
export const MyStore = createContext();

// create contextProvider function which handle data
export const ContextProvider = ({children}) => {
    const [data, setData] = useState("hey I am context provider")
    const [cart, setCart] = useState([]);

    return <MyStore.Provider value={{data, cart}}>{children}</MyStore.Provider>
}
