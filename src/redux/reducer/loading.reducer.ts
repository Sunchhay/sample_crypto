import { createReducer } from '@reduxjs/toolkit';
import { loadLoading } from '../actions/news';

const initialState = false

const loadingReducer = createReducer(initialState, builder => {
    builder
        .addCase(loadLoading, (state, action: any) => {
            return action.payload
        })
});

export { loadingReducer };
