import produce from "immer";

const inititalState = {

};

const reducer = (state = inititalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            
            default:
                break;
        };
    });
};

export default reducer;