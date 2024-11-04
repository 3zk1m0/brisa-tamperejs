import CounterServer from "@/components/counter-server";

export default function Page1({}) {

  return (
    <>
      <navigator-client />
      <div class="size-full flex flex-col justify-center items-center gap-6">
        <h1 class="text-black text-4xl">Browser-events on the server</h1>
        <div class="flex gap-4">
          <counter-client initialValue={42} />
          <CounterServer initialValue={37} />
        </div>
      </div>
    </>
  );
}
