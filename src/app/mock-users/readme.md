
# Server Actions
It's a async function that will be executed on the server side from our current component.
In order to use server action we should use an async function with `use server` directive at the beginning of the function.

- Also, in order to revalidate the data whenever the server action is executed, we should use `revalidatePath` function from `useServer` hook.

- The server actions don't expose our secrets to the client side, so we can use them to fetch data from the server.
