import _ from 'lodash'
import { createReducer } from '@reduxjs/toolkit';
import { clearNews, loadNewsError, loadNewsSuccess, requestNews } from '../actions/news';

const initialState = {
    data: null || <any>{},
};

const NewsReducer = createReducer(initialState, builder => {
    builder
        .addCase(clearNews, state => {
            state.data = {}
        })
        .addCase(loadNewsSuccess, (state, action: any) => {
            state.data = action.payload
            // let _data = [...state.listing, ...action.payload.data]
            // let datas = _.uniqBy(_data, 'id')
            // state.listing = datas
        })
        .addCase(loadNewsError, (state, action) => {
            state.data = action.payload
        });
});

export { NewsReducer };