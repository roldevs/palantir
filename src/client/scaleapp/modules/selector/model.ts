import * as R from 'ramda';

interface ISelectorModel {
  locale: string | null;
  localeList: string[];
  localeDisabled: boolean;
  ns: string | null;
  nsList: string[];
  nsDisabled: boolean;
  type: string | null;
  typeList: string[];
  typeDisabled: boolean;
}

interface ISelectorActions {
  init: () => ISelectorModel;
  get: () => ISelectorModel;
  setLocale: (locale: string | null) => ISelectorModel;
  setLocaleList: (locales: string[]) => ISelectorModel;
  setNs: (ns: string | null) => ISelectorModel;
  setNsList: (list: string[]) => ISelectorModel;
  setType: (type: string | null) => ISelectorModel;
  setTypeList: (list: string[]) => ISelectorModel;
}

const initModel: () => ISelectorModel = R.always({
  locale: null,
  localeList: [],
  localeDisabled: true,
  ns: null,
  nsList: [],
  nsDisabled: true,
  type: null,
  typeList: [],
  typeDisabled: true,
});

const checkDisabled: (model: ISelectorModel) => ISelectorModel =
(model) => {
  model = R.set(R.lensProp('localeDisabled'), R.isEmpty(model.localeList), model);
  model = R.set(R.lensProp('nsDisabled'), R.isEmpty(model.nsList), model);
  return R.set(R.lensProp('typeDisabled'), R.isEmpty(model.typeList), model);
};

const actions: () => ISelectorActions = () => {
  let state: ISelectorModel = initModel();

  const get: () => ISelectorModel = () => checkDisabled(state);

  const setField: (field: string) => (value: any) => ISelectorModel =
  (field) => (value) =>  {
    state = R.set(R.lensProp(field), value, state);
    return checkDisabled(state);
  };

  return {
    init: initModel,
    get,
    setLocale: setField('locale'),
    setLocaleList: setField('localeList'),
    setNs: setField('ns'),
    setNsList: setField('nsList'),
    setType: setField('type'),
    setTypeList: setField('typeList'),
  };
};

export { actions, ISelectorModel, ISelectorActions};
