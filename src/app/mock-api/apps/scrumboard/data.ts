/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const boards = [
    {
        id          : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title       : 'Admin Dashboard',
        description : 'Roadmap for the new project',
        icon        : 'heroicons_outline:rectangle-group',
        lastActivity: now.startOf('day').minus({day: 1}).toISO(),
        members     : [],
    }
];
export const lists = [
    {
        id      : 'a2df7786-519c-485a-a85f-c09a61cc5f37',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        position: 65536,
        title   : 'To do',
    },
    {
        id      : '83ca2a34-65af-49c0-a42e-94a34003fcf2',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        position: 131072,
        title   : 'In progress',
    },
    {
        id      : 'a85ea483-f8f7-42d9-a314-3fed6aac22ab',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        position: 196608,
        title   : 'In review',
    },
    {
        id      : '34cbef38-5687-4813-bd66-141a6df6d832',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        position: 262144,
        title   : 'Completed',
    },
];
export const cards = [
    {
        id      : '6da8747f-b474-4c9a-9eba-5ef212285500',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        listId  : 'a2df7786-519c-485a-a85f-c09a61cc5f37',
        position: 262144,
        title   : 'What is Lorem Ipsum?',
        labels  : [
            'caff9c9b-a198-4564-b1f4-8b3df1d345bb',
        ],
        dueDate : now.startOf('day').minus({day: 1}).toISO(),
    },
    {
        id      : '94fb1dee-dd83-4cca-acdd-02e96d3cc4f1',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        listId  : '83ca2a34-65af-49c0-a42e-94a34003fcf2',
        position: 65536,
        title   : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
        labels  : [
            'e8364d69-9595-46ce-a0f9-ce428632a0ac',
        ],
        dueDate : null,
    },
    {
        id      : 'c0b32f1f-64ec-4f8d-8b11-a8dc809df331',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        listId  : 'a85ea483-f8f7-42d9-a314-3fed6aac22ab',
        position: 65536,
        title   : 'JWT Auth implementation',
        labels  : [
            'caff9c9b-a198-4564-b1f4-8b3df1d345bb',
        ],
        dueDate : null,
    },
    {
        id      : '1d908efe-c830-476e-9e87-d06e30d89bc2',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        listId  : '34cbef38-5687-4813-bd66-141a6df6d832',
        position: 131072,
        title   : 'Create high fidelity wireframes',
        labels  : [],
        dueDate : now.startOf('day').minus({day: 10}).toISO(),
    },
    {
        id      : '3b7f3ceb-107f-42bc-a204-c268c9a56cb4',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        listId  : '34cbef38-5687-4813-bd66-141a6df6d832',
        position: 262144,
        title   : 'Do a research about latest UI trends',
        labels  : [
            'e0175175-2784-48f1-a519-a1d2e397c9b3',
        ],
        dueDate : null,
    },
    {
        id      : 'cd7f01c5-a941-4076-8cef-37da0354e643',
        boardId : '2c82225f-2a6c-45d3-b18a-1132712a4234',
        listId  : '34cbef38-5687-4813-bd66-141a6df6d832',
        position: 327680,
        title   : 'Learn more about UX',
        labels  : [
            'e0175175-2784-48f1-a519-a1d2e397c9b3',
        ],
        dueDate : null,
    },
];
export const labels = [
    {
        id     : 'e0175175-2784-48f1-a519-a1d2e397c9b3',
        boardId: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title  : 'Research',
    },
    {
        id     : '51779701-818a-4a53-bc16-137c3bd7a564',
        boardId: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title  : 'Wireframing',
    },
    {
        id     : 'e8364d69-9595-46ce-a0f9-ce428632a0ac',
        boardId: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title  : 'Design',
    },
    {
        id     : 'caff9c9b-a198-4564-b1f4-8b3df1d345bb',
        boardId: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title  : 'Development',
    },
    {
        id     : 'f9eeb436-13a3-4208-a239-0d555960a567',
        boardId: '2c82225f-2a6c-45d3-b18a-1132712a4234',
        title  : 'Bug',
    },
];
export const members = [

];
