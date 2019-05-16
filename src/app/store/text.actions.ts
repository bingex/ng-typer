import { Action } from '@ngrx/store';

export enum ActionTypes {
  SetActiveWordIndex = 'Set active word index',
  SetPhase = 'Set phase',
  SetTimePassed = 'Set time passed',
  SetTextToType = 'Set text to type',
  SetKeyPressed = 'Set key pressed'
}

export class SetActiveWordIndex implements Action {
  readonly type = ActionTypes.SetActiveWordIndex;
  constructor(public payload: number) {}
}

export class SetPhase implements Action {
  readonly type = ActionTypes.SetPhase;
  constructor(public payload: string) {}
}

export class SetTimePassed implements Action {
  readonly type = ActionTypes.SetTimePassed;
  constructor(public payload: number) {}
}

export class SetTextToType implements Action {
  readonly type = ActionTypes.SetTextToType;
  constructor(public payload: string[]) {}
}

export class SetKeyPressed implements Action {
  readonly type = ActionTypes.SetKeyPressed;
  constructor(public payload: string) {}
}

export type Actions =
  | SetActiveWordIndex
  | SetPhase
  | SetTimePassed
  | SetTextToType
  | SetKeyPressed;
