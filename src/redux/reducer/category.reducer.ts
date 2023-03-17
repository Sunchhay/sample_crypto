import _ from 'lodash'
import { createReducer } from '@reduxjs/toolkit';
import { loadCategoryError, loadCategorySuccess, requestCategory } from '../actions/category';

const initialState = {
    data: null || <any>[],
};

const CategoryReducer = createReducer(initialState, builder => {
    builder
        .addCase(requestCategory, state => {
            state.data = []
        })
        .addCase(loadCategorySuccess, (state, action: any) => {
            state.data = action.payload
        })
        .addCase(loadCategoryError, (state, action) => {
            state.data = action.payload
        });
});

export { CategoryReducer };