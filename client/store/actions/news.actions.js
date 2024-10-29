import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('NEWS');

export const createNews = factory.create('CREATE_NEWS');
export const createNewsAsync = factory.createAsync('CREATE_NEWS_ASYNC');

export const deleteNews = factory.create('DELETE_NEWS');
export const deleteNewsAsync = factory.createAsync('DELETE_NEWS_ASYNC');
