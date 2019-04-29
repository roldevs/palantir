import * as R from 'ramda';
import { IElementFormatted } from '../../../../../lib/typings';

type TCategories = Array<string | number>;

interface IResultsModel {
  categories: TCategories;
}

interface IResultsActions {
  init: () => IResultsModel;
  get: () => IResultsModel;
  setCategories: (categories: TCategories) => void;
}

const actions: () => IResultsActions =
() => {
  const init: () => IResultsModel = R.always({
    categories: [],
  });
  const state: IResultsModel = init();

  const get: () => IResultsModel = () => state;

  const setCategories: (categories: TCategories) => void =
  (categories) =>  R.set(R.lensProp('categories'), categories, state);

  return {
    init,
    get,
    setCategories,
  };
};

export { actions, IResultsModel, IResultsActions, TCategories };
