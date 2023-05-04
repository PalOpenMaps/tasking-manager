import { getPastMonths } from '../../../utils/date';

export const projectContributions = {
  userContributions: [
    {
      username: 'test',
      mappingLevel: 'ADVANCED',
      pictureUrl: null,
      mapped: 3,
      validated: 2,
      total: 5,
      mappedTasks: [1, 3],
      validatedTasks: [5, 7],
      name: 'Test',
      dateRegistered: new Date(),
    },
    {
      username: 'test_1',
      mappingLevel: 'BEGINNER',
      pictureUrl: null,
      mapped: 5,
      validated: 2,
      total: 7,
      mappedTasks: [5, 36, 99, 115, 142],
      validatedTasks: [2, 3],
      name: 'User to test',
      dateRegistered: getPastMonths(2),
    },
    {
      username: 'user_3',
      mappingLevel: 'INTERMEDIATE',
      pictureUrl: null,
      mapped: 4,
      validated: 0,
      total: 4,
      mappedTasks: [2, 69, 122, 56],
      validatedTasks: [6],
      name: 'User 3',
      dateRegistered: getPastMonths(4),
    },
    {
      username: 'user_4',
      mappingLevel: 'INTERMEDIATE',
      pictureUrl: null,
      mapped: 0,
      validated: 1,
      total: 1,
      mappedTasks: [],
      validatedTasks: [99],
      name: 'User 4',
      dateRegistered: getPastMonths(7),
    },
    {
      username: 'user_5',
      mappingLevel: 'BEGINNER',
      pictureUrl: null,
      mapped: 1,
      validated: 0,
      total: 1,
      mappedTasks: [7],
      validatedTasks: [],
      name: 'User 5',
      dateRegistered: getPastMonths(15),
    },
  ],
};

export const projectContributionsByDay = {
  stats: [
    {
      date: '2020-05-19',
      mapped: 1,
      validated: 0,
      cumulative_mapped: 1,
      cumulative_validated: 0,
      total_tasks: 16,
    },
    {
      date: '2020-06-01',
      mapped: 1,
      validated: 1,
      cumulative_mapped: 2,
      cumulative_validated: 1,
      total_tasks: 16,
    },
    {
      date: '2020-06-26',
      mapped: 3,
      validated: 2,
      cumulative_mapped: 5,
      cumulative_validated: 3,
      total_tasks: 16,
    },
  ],
};
