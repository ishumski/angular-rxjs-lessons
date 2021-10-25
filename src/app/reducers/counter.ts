import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store'

export const incr = createAction('[COUNTER] incr')
export const decr = createAction('[COUNTER] decr')
export const toDefaultValue = createAction('[COUNTER] toDefaultValue')

export interface CounterState {
  count: number
}

export const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(incr, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decr, state => ({
    ...state,
    count: state.count - 1
  })),
  on(toDefaultValue, state => ({
    ...state,
    count: 0
  }))
)

export const fetureSelector = createFeatureSelector<CounterState>('counter')
export const countSelector = createSelector(
  fetureSelector,
  state => state.count
)
