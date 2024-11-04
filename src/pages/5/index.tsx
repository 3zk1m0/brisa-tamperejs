
export default function Page1({}) {

  return (
    <>
      <navigator-client />
      <div class="size-full flex flex-col justify-center items-center gap-6">
        <h1 class="text-black text-4xl">Streaming stuff</h1>
        <ul class="text-black text-2xl list-disc list-inside">
          <ListItems />
        </ul>
      </div>
    </>
  );
}

async function* ListItems() {
  yield <li>{await loadItem(0)}</li>;
  yield <li>{await loadItem()}</li>;
  yield <li>{await loadItem()}</li>;
  yield <li>{await loadItem()}</li>;
  yield <li>{await loadItem()}</li>;
  yield <li>{await loadItem()}</li>;
}

async function loadItem(ms = 1000) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return crypto.randomUUID();
}
