import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedLIstener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
// Actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// for components to access this context, it is necessary to set a provider. Then we should wrap the components that need access to the context with it. This provider is in fact a functional component.

/**
 *Returns a UserContext.Provider that let other components access UserContext info.
 *
 * @param {*} children - the components that needs access to the context
 */
export const UserProvider = ({ children }) => {
  //useState allow us track context's value, and the provider allow children to re-render if that state changes. The state is not the context, but it allow us to manipulate it.
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedLIstener(user => {
      setCurrentUser(user);
      if (user) createUserDocumentFromAuth(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
