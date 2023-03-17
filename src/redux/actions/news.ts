import { createAction } from '@reduxjs/toolkit';

const loadLoading = createAction<boolean>('loading');

const clearNews = createAction('news/clear');
const requestNews = createAction<any>('news/request');
const loadNewsSuccess = createAction<any>('news/success');
const loadNewsError = createAction<any>('news/error');

const requestNewsDetail = createAction<any>('newsDetail/request');
const loadNewsDetailSuccess = createAction<any>('newsDetail/success');
const loadNewsDetailError = createAction<any>('newsDetail/error');

export {
    loadLoading,
    clearNews,
    requestNews,
    loadNewsSuccess,
    loadNewsError,
    requestNewsDetail,
    loadNewsDetailSuccess,
    loadNewsDetailError
};
