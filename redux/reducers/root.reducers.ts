import { combineReducers } from "redux";

// Reducers
import estudianteReducer, {
  Estudiante,
  initialState as initialEstudiantesData,
} from "./estudiantes.reducer";
import entrieReducer, {
  EntrieState,
  initialState as initialEntrieData,
} from "./entries.reducer";

// Types
import { AnyData } from "../../types";

type PreloadedStateType = (appData: AnyData) => {
  estudiantes: Estudiante;
  entries: EntrieState;
};

const preloadedState: PreloadedStateType = (appData) => ({
  estudiantes: initialEstudiantesData,
  entries: initialEntrieData,
  ...appData,
});

export interface State {
  estudiantes: Estudiante;
  entries: EntrieState;
}

export { preloadedState };
export default combineReducers<State>({
  estudiantes: estudianteReducer,
  entries: entrieReducer,
});
