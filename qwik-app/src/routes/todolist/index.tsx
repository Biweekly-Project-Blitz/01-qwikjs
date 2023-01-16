import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  const store = useStore(
    {
      toDoObjs: [{
        key: Math.floor(Date.now()/1000),
        desc: Math.floor(Date.now()/1000)
      }]
    },
    { recursive: true }
  );

  return (
    <div>
    <ul>
    {store.toDoObjs.map((toDoItem)=> (
      <li key={toDoItem.key}>The current Unix timestamp is: {toDoItem.desc}</li>
    ))}
    </ul>
    <button
    onClick$={() =>{
      store.toDoObjs = [...store.toDoObjs, {
        key:Math.floor(Date.now()/1000),
        desc:Math.floor(Date.now()/1000),
      }]

    }}    
  >Generate current time</button>
  </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik to-do list'
};
