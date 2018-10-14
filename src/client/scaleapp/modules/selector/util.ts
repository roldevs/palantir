import * as R from 'ramda';
import { IDropdownItem } from './views/dropdown';

const mapStringDropdownItem: (text: string) => IDropdownItem =
(text) => {
  return { id: text, text, value: text };
};

const mapDropboxItems: (list: string[]) => IDropdownItem[] =
(list) => R.map(mapStringDropdownItem, list);

export { mapDropboxItems };
