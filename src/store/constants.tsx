export enum ActionTypes {
    ADD_IMAGE = 'ADD_IMAGE',
    ADD_NEW_TASK = 'ADD_NEW_TASK',
    CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE',
    CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
    CLEAR_TASK = 'CLEAR_TASK',
    CLEAR_ALL_TASKS = 'CLEAR_ALL_TASKS',
    CHANGE_ACTUAL_LIST = 'CHANGE_ACTUAL_LIST'
}

export const ENTER_KEY_CODE = 13;

  
export const TodoItemStatuses = {
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS'
}

const { COMPLETED, IN_PROGRESS } = TodoItemStatuses;

export const buttons = [
	{
  	title: 'All',
		type: 'ALL',
	},

	{
		title: 'Finished',
		type: COMPLETED
	},

	{
		title: 'Active',
		type: IN_PROGRESS
	}
]