const initialState = {}

type InitialStateType = typeof initialState

const testReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return state
  }
}

export default testReducer