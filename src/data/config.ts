import { ConfigType } from '@/types/ConfigTypes';
import * as color from '@/constants/itemcolor.cons';

export const config: ConfigType = {
  name: 'Daily Routine',
  quotes: [
    // {
    //   quote:
    //     "Motivation is what gets you started. Habit is what keeps you going",
    //   author: "Aristotle",
    // },
  ],

  timetable: [
    {
      name: 'Sleep',
      memo: '',
      start: '00:00',
      end: '07:00',
      color: color.ITEM_COLOR_PURPLE,
    },
    {
      name: 'Hygiene',
      memo: '',
      start: '07:00',
      end: '07:30',
      color: color.ITEM_COLOR_BLUE,
    },
    {
      name: 'Gym',
      memo: '',
      start: '07:30',
      end: '08:30',
      color: color.ITEM_COLOR_ORANGE,
    },
    {
      name: 'Breakfast',
      memo: '',
      start: '08:30',
      end: '09:00',
      color: color.ITEM_COLOR_GREEN,
    },
    {
      name: 'Marketing',
      memo: '',
      start: '09:00',
      end: '13:30',
      color: color.ITEM_COLOR_YELLOW,
    },
    {
      name: 'Lunch',
      memo: '',
      start: '13:30',
      end: '14:00',
      color: color.ITEM_COLOR_GREEN,
    },
    {
      name: 'Nap',
      memo: '',
      start: '14:00',
      end: '15:30',
      color: color.ITEM_COLOR_CYAN,
    },
    {
      name: 'Work',
      memo: '',
      start: '15:30',
      end: '18:00',
      color: color.ITEM_COLOR_ORANGE,
    },
    {
      name: 'Tea',
      memo: '',
      start: '18:00',
      end: '18:30',
      color: color.ITEM_COLOR_GREEN,
    },
    {
      name: 'Work',
      memo: '',
      start: '18:30',
      end: '20:00',
      color: color.ITEM_COLOR_ORANGE,
    },
    {
      name: 'Reading',
      memo: '',
      start: '20:00',
      end: '21:00',
      color: color.ITEM_COLOR_PINK,
    },
    {
      name: 'Family',
      memo: '',
      start: '21:00',
      end: '22:00',
      color: color.ITEM_COLOR_GREEN,
    },
    {
      name: 'Planning',
      memo: '',
      start: '22:00',
      end: '22:30',
      color: color.ITEM_COLOR_GRAY,
    },
    {
      name: 'Hygiene',
      memo: '',
      start: '22:30',
      end: '23:00',
      color: color.ITEM_COLOR_BLUE,
    },
    {
      name: 'Sleep',
      memo: '',
      start: '23:00',
      end: '00:00',
      color: color.ITEM_COLOR_PURPLE,
    },
  ],
};
