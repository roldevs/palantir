import Bluebird from 'bluebird';
import * as R from 'ramda';
import {
  IOptionalElementDefinition,
  IRepositoryFactory,
  ITestRepositoryOptions,
} from '../typings';

const testRepository: (options: ITestRepositoryOptions) => IRepositoryFactory =
() => {
  const get: () => Bluebird<IOptionalElementDefinition> =
  () => Bluebird.resolve(null);

  return {
    get,
  };
};

export default testRepository;
