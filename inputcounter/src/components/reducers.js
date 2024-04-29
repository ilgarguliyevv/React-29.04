function reducer(state, action) {

    switch (action.type) {
        case "SetValue":
            return { ...state, value: action.value }

        case "SetData":
            return { value: "", data: [...state.data, action.value] }

        case "SetInc":
            return { ...state, count: ++action.count }

        case "SetNewValue":
            return { ...state, count: state.count - +action.value }

        default:
            break;
    }

}

export default reducer;