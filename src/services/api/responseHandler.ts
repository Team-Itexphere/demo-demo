import {statusHandler} from './statusHandler';

/**
 * Success Response Handler
 *
 * @param {*} response
 * @returns
 * @memberof RestClient
 */
export const responseHandler = (response: any) => {
  const {hasError, errorMessage} = statusHandler(response);
  if (hasError) {
    return {hasError: true, errorMessage: errorMessage};
  } else {
    return {
      hasError: false,
      errorMessage: '',
      data: response.data,
    };
  }
};
