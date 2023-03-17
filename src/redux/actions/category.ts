import { createAction } from '@reduxjs/toolkit';

const requestCategory = createAction('category/request');
const loadCategorySuccess = createAction<any>('category/success');
const loadCategoryError = createAction<any>('category/error');

export {
    requestCategory,
    loadCategorySuccess,
    loadCategoryError
};
