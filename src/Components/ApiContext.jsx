import { createContext } from "react";

const ApiContext = createContext();

export default ApiContext;

/* Explanation:
    In this snippet, we have created a context named ApiContext using the createContext() method from the react library.
    We have exported the ApiContext so that it can be used in other components.
    The ApiContext is used to provide the URL to the components that require it.
    The URL is provided as a value to the ApiContext.Provider in the App component.
    The components that require the URL can access it using the useContext hook.

Creating a Context
Providing a Context
Utilizing a Context */
