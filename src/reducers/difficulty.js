const initialState = 1

const changeDifficulty = (state = initialState, action) => {
    switch (action.type) {
        case "EASY": return 1;
        case "MEDIUM": return 2;
        case "HARD": return 3;
        default: return state;
    }
}

export default changeDifficulty;