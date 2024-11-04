
export default function Page3({}) {

  return (
    <>
      <navigator-client />
      <div class="size-full flex flex-col justify-center items-center gap-6">
        <h1 class="text-black text-4xl">Multi-platform</h1>
        <ul class="text-black text-2xl list-disc list-inside">
          <li>Integrated with tauri</li>
          <li>Web</li>
          <li class="pl-5">Bun</li>
          <li class="pl-5">Node</li>
          <li class="pl-5">Static</li>
          <li>Android</li>
          <li>iOS</li>
          <li>Deskotop</li>
        </ul>
      </div>
    </>
  );
}
