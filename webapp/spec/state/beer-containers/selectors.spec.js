import { selectContainers } from 'state/beer-containers/selectors';

describe('selectors', () => {
  describe('#selectContainers', () => {
    it('returns containers from state', () => {
      const state = { beerContainers: { containers: [{ beer: 'Beer 1' }] } };
      expect(selectContainers(state)).toEqual([{ beer: 'Beer 1' }])
    });
  });
});
