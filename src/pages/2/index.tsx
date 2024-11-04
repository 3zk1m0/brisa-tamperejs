
export default function Page2({}) {

  return (
    <>
      <navigator-client />
      <div class="size-full flex flex-col justify-center items-center gap-6">
        <h1 class="text-black text-4xl">Notes from their website</h1>
        <ul class="text-black text-2xl list-disc">
          <li>The Web Platform Framework</li>
          <li>Dynamically server-rendered JSX</li>
          <li>Zero JavaScript shipped to the browser by default</li>
          <li>Web Component island-based</li>
          <li>Browser-events on the server</li>
          <li>Full i18n support</li>
          <li>Multi-platform</li>
        </ul>
      </div>
    </>
  );
}
