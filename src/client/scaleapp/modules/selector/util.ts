import * as R from 'ramda';
import { removeExtension } from '../../../../lib/utils';
import { IDropdownItem } from '../../../ui/dropdown';

const mapTyperopdownItem: (text: string) => IDropdownItem =
(text) => {
  return { id: removeExtension(text), text: removeExtension(text), value: removeExtension(text) };
};

const mapStringDropdownItem: (text: string) => IDropdownItem =
(text) => {
  return { id: text, text, value: text };
};

const mapDropboxItems: (list: string[]) => IDropdownItem[] =
(list) => R.map(mapStringDropdownItem, list);

const mapTypeDropboxItems: (list: string[]) => IDropdownItem[] =
(list) => R.map(mapTyperopdownItem, list);

export { mapDropboxItems, mapTypeDropboxItems };
