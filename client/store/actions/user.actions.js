import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('USERS');

export const createUser = factory.create('CREATE_USER');
export const createUserAsync = factory.createAsync('CREATE_USER_ASYNC');

export const changeUserFieldAction = factory.create('CHANGE_USER_FIELD_ACTION');
export const changeUserFieldActionAsync = factory.createAsync('CHANGE_USER_FIELD_ACTION_ASYNC');

export const loginedUserAction = factory.create('LOGINED_USER_ACTION');
export const loginedUserActionAsync = factory.createAsync('LOGINED_USER_ACTION_ASYNC');