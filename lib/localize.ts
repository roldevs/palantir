import i18next from 'i18next';
import * as R from 'ramda';
import {
  IElement,
  IElementDefinition,
  ILocalizeOptions,
  IRelatedElements,
} from './typings';

const localize: (options: ILocalizeOptions) => {
  t: (element: IElement | IElementDefinition) => string;
} =
(options) => {
  const lib = i18next.init({
    initImmediate: false,
    lng: R.defaultTo('en', options.locale),
    debug: R.defaultTo(false, options.debug),
    resources: options.translations,
  });

  const t: (element: IElement | IElementDefinition) => string =
    (element) => lib.t(`${element.type}.${element.text}`);

  return { t };
};

export = localize;
