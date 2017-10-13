export const ADD_USER = 'ADD_USER';
//these consts would be exported, then imported into reducers for consistency's sake

//all of this does absolutely nothing currently
//these are just examples of actions to utilize later from a previous project
export function addUser( firstName, lastName, email, password){
  return {
    type: ADD_USER,
    firstName,
    lastName,
    email,
    password
  };
}