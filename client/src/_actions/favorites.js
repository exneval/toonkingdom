import {
  METHOD_GET,
  METHOD_POST,
  METHOD_DELETE,
  GET_FAVS_PENDING,
  GET_FAVS_FULFILLED,
  GET_FAVS_REJECTED,
  POST_FAV_PENDING,
  POST_FAV_FULFILLED,
  POST_FAV_REJECTED,
  DEL_FAV_PENDING,
  DEL_FAV_FULFILLED,
  DEL_FAV_REJECTED,
  RESET_FAVS,
} from '../config/constants';

export const fetchData = (method, webtoon_id, bool) => {
  let methodType;

  switch (method) {
    case METHOD_GET:
      methodType = GET_FAVS_PENDING;
      break;
    case METHOD_POST:
      methodType = POST_FAV_PENDING;
      break;
    case METHOD_DELETE:
      methodType = DEL_FAV_PENDING;
      break;
  }
  return {
    type: methodType,
    payload: bool,
    toon_id: webtoon_id,
    isPost: methodType == POST_FAV_PENDING ? true : false,
    isDelete: methodType == DEL_FAV_PENDING ? true : false,
  };
};

export const fetchDataFulfilled = (method, data) => {
  let methodType;

  switch (method) {
    case METHOD_GET:
      methodType = GET_FAVS_FULFILLED;
      break;
    case METHOD_POST:
      methodType = POST_FAV_FULFILLED;
      break;
    case METHOD_DELETE:
      methodType = DEL_FAV_FULFILLED;
      break;
  }
  return {
    type: methodType,
    payload: data,
    isLoading: false,
    isPost: false,
    isDelete: false,
  };
};

export const fetchDataRejected = (method, error) => {
  let methodType;

  switch (method) {
    case METHOD_GET:
      methodType = GET_FAVS_REJECTED;
      break;
    case METHOD_POST:
      methodType = POST_FAV_REJECTED;
      break;
    case METHOD_DELETE:
      methodType = DEL_FAV_REJECTED;
      break;
  }
  return {
    type: methodType,
    payload: error,
    isLoading: false,
    isPost: false,
    isDelete: false,
  };
};

export const resetFavs = () => {
  return {
    type: RESET_FAVS,
  };
};
