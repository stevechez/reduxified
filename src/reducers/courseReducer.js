import * as types from './actionTypes'

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return[...state,
        Object.assign({}, action.course)
      ];
      return state;

    default:
      return state;


  }
}