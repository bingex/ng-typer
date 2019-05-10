import { Action } from '@ngrx/store';

export enum ActionTypes {
  SetActiveWordIndex = 'Set active word index',
  StartType = 'Start type',
  SetTimePassed = 'Set time passed'
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

export type Actions = SetActiveWordIndex | StartType | SetTimePassed;
