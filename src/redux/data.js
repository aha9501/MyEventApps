import { createStore } from 'redux';
import eventAdd from './reducers';

const initStore =  {
        events: [
            {
              title: "Meeting Zoom AWS",
              date: "2020-07-30 10:22:00",
            },
            {
              title: "Open Meeting",
              date: "2020-07-22 14:00:59",
            },
            {
              title: "Gajian TF",
              date: "2020-07-24 23:59:00",
            },
          ]
};

    const data = createStore(eventAdd, initStore);
    export default data;