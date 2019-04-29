import * as R from 'ramda';
import { IElementFormatted, IMetaCathegoryResult } from '../../../../../lib/typings';

interface IResultsModel {
  cathegories: IMetaCathegoryResult[];
}

interface IResultsActions {
  init: () => IResultsModel;
  get: () => IResultsModel;
  setResults: (cathegories: IMetaCathegoryResult[]) => void;
}

const actions: () => IResultsActions =
() => {
  const init: () => IResultsModel = R.always({
    cathegories: [],
  });
  const state: IResultsModel = init();

  const get: () => IResultsModel = () => state;

  const setResults: (cathegories: IMetaCathegoryResult[]) => void =
  (cathegories) =>  R.set(R.lensProp('cathegories'), cathegories, state);

  return {
    init,
    get,
    setResults,
  };
};

export { actions, IResultsModel, IResultsActions };
