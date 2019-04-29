import * as R from 'ramda';
import { IElementFormatted } from '../../../../../lib/typings';

type TCathegories = Array<string | number>;

interface IResultsModel {
  cathegories: TCathegories;
}

interface IResultsActions {
  init: () => IResultsModel;
  get: () => IResultsModel;
  setCathegories: (cathegories: TCathegories) => void;
}

const actions: () => IResultsActions =
() => {
  const init: () => IResultsModel = R.always({
    cathegories: [],
  });
  const state: IResultsModel = init();

  const get: () => IResultsModel = () => state;

  const setCathegories: (cathegories: TCathegories) => void =
  (cathegories) =>  R.set(R.lensProp('cathegories'), cathegories, state);

  return {
    init,
    get,
    setCathegories,
  };
};

export { actions, IResultsModel, IResultsActions, TCathegories };
