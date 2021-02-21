import { writable, readable, derived } from "svelte/store";

export const count = writable(0);
export const name = writable("Sumit");

// start function get called on receiving first subscriber
// and stop function get called on un-subscription of last subscriber
export const date = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

const startDate = new Date();

export const escaped = derived(date, (dateValue) =>
  Math.round((dateValue - startDate) / 1000)
);

const createCount = (initialValue = 0) => {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
    reset: () => set(0),
  };
};

export const customCount = createCount();
