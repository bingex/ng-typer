/**
 * Interface for State
 * Please add here key with type if you want new state property
 */
export interface State {
  activeWordIndex: number;
  phase: string;
  timePassed: number;
  textToType: string[];
}
