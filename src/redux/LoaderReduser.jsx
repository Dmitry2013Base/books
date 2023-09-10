import { LOADER_OFF, LOADER_ON } from "../redux/Types";

const init = {
    visible: false,
    visibleContent: false
}

export const LoaderReduser = (state = init, action) => {

    switch (action.type) {
        
        case LOADER_ON: {

            return {
                ...state,
                visible: true,
                visibleContent: action.visibleContent
            }
        }
        case LOADER_OFF: {

            return {
                ...state,
                visible: false,
                visibleContent: action.visibleContent
            }
        }

        default: return state
    }
};
