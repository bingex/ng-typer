/**
 * Interface for State
 * Please add here key with type if you want new state property
 */
export interface State {
  activeWordIndex: number;
  typerInProgress: boolean;
  timePassed: number;
  textToType: string[];
}
