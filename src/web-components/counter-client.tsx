import type { WebContext } from 'brisa';

export default function Counter(
  { initialValue = 0 }: { initialValue: number },
  { state }: WebContext,
) {
  const count = state(initialValue);

  return (
      <div class="flex flex-col items-center gap-4">
        <h2 class='marker'>Client counter</h2>
        <div class='flex items-center gap-2'>
          <button class="cursor-pointer border px-2 hover:scale-105" onClick={() => count.value--}>-</button>
          <div class="font-sans">{count.value}</div>
          <button class="cursor-pointer border px-2 hover:scale-105" onClick={() => count.value++}>+</button>
        </div>
      </div>
  );
}
