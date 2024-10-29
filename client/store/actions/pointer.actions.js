import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('POINTERS');

export const createPointer = factory.create('CREATE_POINTER');
export const createPointerAsync = factory.createAsync('CREATE_POINTER_ASYNC');

export const deletePointer = factory.create('DELETE_POINTER');
export const deletePointerAsync = factory.createAsync('DELETE_POINTER_ASYNC');
