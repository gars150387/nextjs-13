import React, { useReducer} from 'react';
import { AuthContext } from './auth/authContext';
import { RouteMain } from './route/RouteMain';
import { authReducer} from './auth/authReducer'


const init = () => {
  return {
    language: true
  }
}


function App() {

  const [state, dispatch] = useReducer(authReducer, {} , init )

  return (
    <div className="App">
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <RouteMain />
        </AuthContext.Provider>
    </div>
  );
}

export default App;
