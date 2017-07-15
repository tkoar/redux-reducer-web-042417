export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      return {numberOfPresents: + 1}
    case "DECREASE":
      return {numberOfPresents: - 1}
    default: return state
  }
}
