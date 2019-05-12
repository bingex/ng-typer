import { Action } from '@ngrx/store';

export enum ActionTypes {
  SetActiveWordIndex = 'Set active word index',
  StartType = 'Start type',
  SetTimePassed = 'Set time passed',
  SetTextToType = 'Set text to type'
}

export class SetActiveWordIndex implements Action {
  readonly type = ActionTypes.SetActiveWordIndex;
  constructor(public payload: number) {}
}

export class StartType implements Action {
  readonly type = ActionTypes.StartType;
  constructor(public payload: boolean) {}
}

export class SetTimePassed implements Action {
  readonly type = ActionTypes.SetTimePassed;
  constructor(public payload: number) {}
}

export class SetTextToType implements Action {
  readonly type = ActionTypes.SetTextToType;
  constructor(public payload: string[]) {}
}

export type Actions =
  | SetActiveWordIndex
  | StartType
  | SetTimePassed
  | SetTextToType;
