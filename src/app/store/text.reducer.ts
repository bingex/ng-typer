import { Action } from "@ngrx/store";

// State interface
import { State, PhaseTypes } from "./../interfaces/State";

// Actions
import { Actions, ActionTypes } from "./text.actions";

/**
 * Initial state for store
 * Please add initial value here after you changed State interface
 * @type {State}
 */
export const intitialState: State = {
  activeWordIndex: 0,
  phase: PhaseTypes.stopped,
  timePassed: 0,
  textToType: [],
  keyPressed: " "
};

/**
 * Reducer for making new state from old one
 * @param  {State} state initial store state
 * @param  {Action} action one of available actions
 */
export function textReducer(state = intitialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SetActiveWordIndex:
      return {
        ...state,
        activeWordIndex: action.payload
      };

    case ActionTypes.SetPhase:
      return {
        ...state,
        phase: PhaseTypes[action.payload],
        activeWordIndex: action.payload ? state.activeWordIndex : 0,
        timePassed: action.payload ? state.timePassed : 0
      };

    case ActionTypes.SetTimePassed:
      return { ...state, timePassed: action.payload };

    case ActionTypes.SetTextToType:
      return { ...state, textToType: action.payload };

    case ActionTypes.SetKeyPressed:
      return { ...state, keyPressed: action.payload };

    default:
      return state;
  }
}
