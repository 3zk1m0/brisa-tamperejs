import type { WebContext } from "brisa";
import { navigate } from "brisa";

export default function NavigatorClient({}, { onMount, cleanup, route, derived }: WebContext) {

  const current = derived(() => parseInt(route.name.slice(1)))

  onMount(() => document.addEventListener("keydown", onArrowKeyDown));
  cleanup(() => document.removeEventListener("keydown", onArrowKeyDown));

  function onArrowKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowLeft":
        if (current.value > 1) navigate(`${current.value - 1}`)
        break;
      case "ArrowRight":
        if (current.value < 3) navigate(`${current.value + 1}`)
        break;
    }
  }

  return (
    <div class='absolute bottom-0 right-0 text-5xl marker'>
      <a class='p-2 hover:scale-105' href={`${current.value - 1}`}>{"<"}</a>
      <a class='p-2 hover:scale-105' href={`${current.value + 1}`}>{">"}</a>
    </div>
  );
}
