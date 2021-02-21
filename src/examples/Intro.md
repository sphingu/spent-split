# About Svelte 

`Date: 8 Feb 2021`

`Version: 3.32.1`

## Approach
- Traditional frameworks like react, vue do their work in the browser.
- Svelte shift that work into a compile step that happens when you build your app.

## What is Svelte ?
- Component framework traditional use Virtual DOM which eat your frame budget and tax the garbage collector.
- Svelte runs at build-time, converting your component into highly efficient code that surgically update the DOM which improve performance characteristics

## Aspect of Svelte (Why it called Cybernatically enhanced)
- Outstanding performance
- Small bundles
- Accessibility
- Build in style encapsulation
- Declarative transition
- Easy to use
- The fact that it is compiler

## Virtual DOM is pure overhead
- Object representation of DOM is called Virtual DOM.
- diffing isn't free
- it is not just diffing though
```js
function MyComponent(props) {
  const value = expensiveFunction(props.foo);

  return (...
    <button onClick={()=> handleClick(...)}>
    ...
  )
}
```
- unnecessary run of expensive function on no prop change.
- Similar thing for inline event for element.


## Usage
- `npx degit sveltejs/templlate my-folder-name`
- `cd my-folder-name`
- `npm install`
- `npm run dev`
- `npm run build` - for production build

- can set `--host 0.0.0.0` for network connection with IP
- can set `--single` to allow it to work for all route as SPA. (by default, it will serve for things in public folder only)

## Deploy
- On Vercel
  - `npm i -g vercel`
  - `cd public`
  - `vercel deploy --name project-name`
- On surge
  - `npm i -g surge`
  - `npm run build`
  - `surge public project-name.surge.sh`

# Typescript
- `node scripts/setupTypescript.js` to setup typescript.
- `<script lang="ts">`
- `svelte-check` for typescript validation




