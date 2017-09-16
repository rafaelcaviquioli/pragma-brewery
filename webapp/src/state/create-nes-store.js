import Nes from 'nes/client';
import createStore from './create-store';

export default preloadedState => {
  const store = createStore(preloadedState);
  const client = new Nes.Client('ws://localhost:9000');

  client.connect(() => {
    client.onUpdate = wsAction => {
      store.dispatch({ ...wsAction, type: `WS_${wsAction.type}` });
    };
  });

  return store;
}
