const initialState = {}

type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
