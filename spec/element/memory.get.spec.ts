/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import testConnector from '../../src/lib/connectors/test';
import elementModule from '../../src/lib/element';
import metaTestModule from '../../src/lib/meta/test';
import testRepository from '../../src/lib/repository/memory';
import searchModule from '../../src/lib/search';
import {
  IMetaFactory,
  IOptionalElementDefinition,
  ISearchDefinition,
  ISearchResult,
} from '../../src/lib/typings';

describe('Element#get', () => {
  const repository = testRepository({
    locale: 'es',
    elements: {},
  });

  const connector = testConnector({
    elements: {
      es: {
        ns1: {
          person: {
            data: {
              text: 'ns1.person',
              related: {
                face: {
                  search: [{
                    locale: 'es',
                    ns: 'ns1',
                    type: 'face',
                  }],
                },
                body: {
                  search: [{
                    locale: 'es',
                    ns: 'ns1',
                    type: 'body',
                  }],
                },
              },
            },
          },
          face: {
            data: {
              text: 'face',
              options: [{
                text: 'red',
              }, {
                text: 'yellow',
              }, {
                text: 'black',
              }],
            },
          },
          body: {
            data: {
              text: 'body',
              related: {
                arms: {
                  search: [{
                    locale: 'es',
                    ns: 'ns1',
                    type: 'arms',
                  }],
                },
                legs: {
                  search: [{
                    locale: 'es',
                    ns: 'ns1',
                    type: 'legs',
                  }],
                },
              },
            },
          },
          arms: {
            data: {
              text: 'arms',
              options: [{
                text: 'arm_left',
              }, {
                text: 'arm_right',
              }],
            },
          },
          legs: {
            data: {
              text: 'legs',
              options: [{
                text: 'leg_left',
              }, {
                text: 'leg_right',
              }],
            },
          },
        },
      },
    },
  });

  const meta: IMetaFactory = metaTestModule();

  const element = elementModule({
    connector,
    repository,
    meta,
  });

  const search = searchModule({
    connector,
    repository,
    meta,
  });

  describe('arms', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'ns1',
      type: 'arms',
    }];

    it('left or right', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          expect(value).is.not.null;
          expect(value!.text).to.be.oneOf(['arm_left', 'arm_right']);
          done();
        });
      });
    });
  });
  describe('legs', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'ns1',
      type: 'legs',
    }];

    it('left or right', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          expect(value).is.not.null;
          expect(value!.text).to.be.oneOf(['leg_left', 'leg_right']);
          done();
        });
      });
    });
  });
  describe('body', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'ns1',
      type: 'body',
    }];

    it('arm and leg results', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          const arms: any = value!.related!.arms!.results![0]!;
          const legs: any = value!.related!.legs!.results![0]!;

          expect(value).is.not.null;
          expect(value!.text).to.be.eql('body');
          expect(arms.text).to.oneOf(['arm_left', 'arm_right']);
          expect(legs.text).to.oneOf(['leg_left', 'leg_right']);
          done();
        });
      });
    });
  });
  describe('person', () => {
    const s: ISearchDefinition[] = [{
      locale: 'es',
      ns: 'ns1',
      type: 'person',
    }];

    it('person results', (done) => {
      search.find(s).then((result: ISearchResult) => {
        element.get(result![0]).then((value: IOptionalElementDefinition) => {
          const face: any = value!.related!.face!.results![0]!;
          const body: any = value!.related!.body!.results![0]!;
          const arms: any = body.related!.arms.results![0]!;
          const legs: any = body.related!.legs.results![0]!;

          expect(value).is.not.null;
          expect(value!.text).to.be.eql('ns1.person');
          expect(face.text).to.oneOf(['red', 'yellow', 'black']);
          expect(arms.text).to.oneOf(['arm_left', 'arm_right']);
          expect(legs.text).to.oneOf(['leg_left', 'leg_right']);
          done();
        });
      });
    });
  });
});
