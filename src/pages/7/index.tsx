
export default function Page({}) {

  return (
    <>
      <navigator-client />
      <div class="size-full flex flex-col justify-center items-center gap-6">
        <h1 class="text-black text-4xl">Suspense stuff</h1>
        <ul class="text-black text-2xl list-disc list-inside">
          <SunspenseItem />
        </ul>
      </div>
    </>
  );
}

async function SunspenseItem() {

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div class="text-black text-2xl">Done</div>
  )
}


SunspenseItem.suspense = () => {
  return <div class="text-black text-2xl">Loading...</div>;
}
