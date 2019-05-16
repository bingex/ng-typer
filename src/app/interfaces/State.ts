export enum PhaseTypes {
  stopped = 'stopped',
  started = 'started',
  finished = 'finished'
}

/**
 * Interface for State
 * Please add here key with type if you want new state property
 */
export interface State {
  activeWordIndex: number;
  phase: PhaseTypes;
  timePassed: number;
  textToType: string[];
  keyPressed: string;
}
