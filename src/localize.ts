import i18next from 'i18next';
import * as R from 'ramda';
import {
  IElement,
  IElementDefinition,
  ILocalizeOptions,
  IRelatedElements,
} from './typings';

const localize: (options: ILocalizeOptions) => {
  t: (element: IElementDefinition) => string;
  tElement: (element: IElement | IElementDefinition) => IElement | IElementDefinition;
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

  const tElement: (element: IElement | IElementDefinition) => IElement | IElementDefinition =
  (element) => {
    let newRels: IRelatedElements | undefined;

    if (element.related) {
      const rels: IRelatedElements = element.related as IRelatedElements;

      newRels = R.reduce(function(acc: IRelatedElements, key: string) {
        if (rels[key].result) {
          return R.set(R.lensPath([key]), R.merge(rels[key], { result: tElement(rels[key].result!) }), acc);
        }
        return acc;
      }, {}, R.keys(element.related) );

      const ret = R.merge(element, {
        text: t(element),
        related: newRels,
      });
      return ret;
    }

    return R.merge(element, {text: t(element)});
  };

  return { t, tElement };
};

export = localize;
