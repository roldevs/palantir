import * as R from 'ramda';
import { IFormattedResult } from '../../../../lib/typings';

interface IResultsModel {
  result: IFormattedResult | null;
}

interface IResultsActions {
  init: () => IResultsModel;
  get: () => IResultsModel;
  setResults: (options: IResultsModel) => void;
}

const actions: () => IResultsActions =
() => {
  const init: () => IResultsModel = R.always({
    result: null,
  });
  const state: IResultsModel = init();

  const get: () => IResultsModel = () => state;

  const setResults: (result: IResultsModel) => void =
  (result) =>  {
    return R.set(R.lensProp('result'), result, state);
  };

  return {
    init,
    get,
    setResults,
  };
};

export { actions, IResultsModel, IResultsActions};
