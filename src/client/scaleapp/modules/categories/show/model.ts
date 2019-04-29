import * as R from 'ramda';
import { IMetaCategoryResult } from '../../../../../lib/typings';

interface IResultsModel {
  categories: IMetaCategoryResult[];
}

interface IResultsActions {
  init: () => IResultsModel;
  get: () => IResultsModel;
  setResults: (categories: IMetaCategoryResult[]) => void;
}

const actions: () => IResultsActions =
() => {
  const init: () => IResultsModel = R.always({
    categories: [],
  });
  const state: IResultsModel = init();

  const get: () => IResultsModel = () => state;

  const setResults: (categories: IMetaCategoryResult[]) => void =
  (categories) =>  R.set(R.lensProp('categories'), categories, state);

  return {
    init,
    get,
    setResults,
  };
};

export { actions, IResultsModel, IResultsActions };
