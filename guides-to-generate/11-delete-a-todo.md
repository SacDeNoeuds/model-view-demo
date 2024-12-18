# Delete a todo

A deletion usually involves a confirmation step. Let’s model that first.

## `RemoteActionToConfirm<T, Args>`

The only difference with `RemoteAction<T>` is that we will add an intermediary step. `trigger(…)` will not execute anything yet and wait for a `confirm()`-ation or `cancel()`-ation.

### Definition & Implementation

<!-- include [code:ts] ./11-delete-a-todo/RemoteActionToConfirm.ts -->

### Specification/Test

<!-- include [code:ts] ./11-delete-a-todo/RemoteActionToConfirm.spec.ts -->

## Updating the `TodoPageModel`

We need to update the `TodoPageModel` to include a `deleteTodo(id)` action, and remove the deleted todo from the list upon deletion success.

For readability, define all the effects in a dedicated `registerEffects` function which returns a `dispose` function.

<!-- diff-between [code:ts] ./11-delete-a-todo/TodoPageModel.ts ./10-update-a-todo-title/TodoPageModel.ts -->

## Updating React components

Let’s add the delete button to the checkbox list:

<!-- diff-between [code:tsx] ./11-delete-a-todo/react/TodoCheckboxList.tsx ./10-update-a-todo-title/react/TodoCheckboxList.tsx -->

Now that we did, let’s create a `ConfirmActionDialog` to handle any `RemoteActionToConfirm`:

<!-- include [code:tsx] ./11-delete-a-todo/react/ConfirmActionDialog.tsx -->

Now we can render it like so in our `TodoPage` component:

```tsx
// TodoPage.tsx

<ConfirmActionDialog action={model.deleteTodo}>
  {(todo) => <>You are about to delete "{todo.title}", continue?</>}
</ConfirmActionDialog>
```

## Updating Vue components

Let’s add the delete button to the checkbox list:

<!-- diff-between [code:vue] ./11-delete-a-todo/vue/TodoCheckboxList.vue ./10-update-a-todo-title/vue/TodoCheckboxList.vue -->

Now that we did, let’s create a `ConfirmActionDialog` to handle any `RemoteActionToConfirm`:

<!-- include [code:vue] ./11-delete-a-todo/vue/ConfirmActionDialog.vue -->

Now we can render it like so in our `TodoPage` component:

```tsx
// TodoPage.vue

<ConfirmActionDialog action={model.deleteTodo}>
  {(todo) => <>You are about to delete "{todo.title}", continue?</>}
</ConfirmActionDialog>
```

---

Congrats, you have reached the end of the series!

I hope everything got crystal clear and you are fully familiar with the concepts in this guide.

If you have any feedback or suggestions, you can open an issue on [GitHub](https://github.com/SacDeNoeuds/model-view-demo/issues) or [create a PR](https://github.com/SacDeNoeuds/model-view-demo/pulls) ❤️.
