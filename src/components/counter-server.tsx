import type { RequestContext } from 'brisa';
import { rerenderInAction } from 'brisa/server';

export default function CounterServer(
  { initialValue = 0 }: { initialValue: number },
  { store }: RequestContext,
) {
  if (!store.has('count')) store.set('count', initialValue);
  store.transferToClient(['count']);

  function increment() {
    store.set('count', store.get('count') + 1);
    rerenderInAction({ type: 'targetComponent' });
  }

  function decrement() {
    store.set('count', store.get('count') - 1);
    rerenderInAction({ type: 'targetComponent' });
  }

  return (
    <div class="flex flex-col items-center gap-4">
      <h2>Server counter</h2>
      <div class='flex items-center gap-2'>
        <button class="cursor-pointer border px-2 hover:scale-105" onClick={decrement}>-</button>
        <div class="font-sans">{store.get('count')}</div>
        <button class="cursor-pointer border px-2 hover:scale-105" onClick={increment}>+</button>
      </div>
    </div>
  );
}
