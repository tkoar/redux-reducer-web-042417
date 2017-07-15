export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      })
    case 'REMOVE_FRIEND':
      const removeThis = state.friends.filter(el => el.id === action.id)[0]
      const removalIndex = state.friends.indexOf(removeThis)
      const beginning_friends = state.friends.slice(0, removalIndex)
      const ending_friends = state.friends.slice(removalIndex + 1)
      return {friends: [...beginning_friends, ...ending_friends]}
      break;
    default:
      return state
  }
}
