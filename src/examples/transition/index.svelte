<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let visible = false;

  function spin(node, { duration }) {
    return {
      duration,
      css: (t: number) => {
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
      },
    };
  }
  function typewriter(node, { speed = 50 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  Fade
</label>

{#if visible}
  <p>I am visible normally</p>
  <p in:typewriter={{ speed: 50 }}>I am visible though fading</p>
  <div class="centered" in:spin={{ duration: 8000 }} out:fade>
    <span>transitions!</span>
  </div>
  <p in:fly={{ y: -200, duration: 2000 }} out:fade>In-Fly Out-Fade</p>
  <p transition:fly={{ y: -200, duration: 2000 }}>
    I am visible though fly(y:200, duration: 2000)
  </p>
  <p
    transition:fade
    on:introstart={() => console.log("intro started")}
    on:introend={() => console.log("intro end")}
    on:outrostart={() => console.log("outro started")}
    on:outroend={() => console.log("outro end")}
  >
    I am visible though fading
  </p>
{/if}

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>
