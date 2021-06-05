const initialData = {
    tasks: {
        'task-1': {id: 'task-1', title: 'First task', datetime: '30.05.21 / 12:45', user: 'Greg'},
        'task-2': {id: 'task-2', title: 'Second task', datetime: '30.05.21 / 12:45', user: 'Greg'},
        'task-3': {id: 'task-3', title: 'Third task', datetime: '30.05.21 / 12:45', user: 'Greg'},
        'task-4': {id: 'task-4', title: 'Forth task', datetime: '30.05.21 / 12:45', user: 'Greg'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Submitted',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'QA',
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Complete',
            taskIds: [],
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;