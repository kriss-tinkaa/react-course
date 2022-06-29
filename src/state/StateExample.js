import React, {useState} from 'react';

const StateExample = () => {

    const [state, setState] = useState({isAdmin: false, userName: 'Bar'});
  const {isAdmin} = state;
   const assignAdmin = () => {
     setState({...state, isAdmin: true})
   }

  // const assignAdmin = () => {
  //   setState({isAdmin:true})  //WRONG
  // }  

  // const assignAdmin = () => {
  //   state.isAdmin = true; //VERY WRONG
  //   setState(state)
  // }

    return (
        <div>
            <h1>Hello user, you is {isAdmin ? 'Super admin': 'user'}</h1>
            <button onClick={assignAdmin}>Assign admin</button>
        </div>
    );
}

export default StateExample;
