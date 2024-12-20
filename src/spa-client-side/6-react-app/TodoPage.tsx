/** @jsx React.createElement */
import React, { useEffect } from 'react'
import { TodoPageModel } from '../5-app-model/TodoPageModel'
import { useSignal } from './useSignal'
import { RemoteData } from './RemoteData'
import { TodoUnorderedList } from './TodoUnorderedList'

interface Props {
  model: TodoPageModel
}

export function TodoPage({ model }: Props) {
  const todoList = useSignal(model.getTodoList.data)

  // fetch the todo list on mount.
  useEffect(() => {
    void model.getTodoList.trigger()
    // explicitly mark the promise as non-awaited with `void`
  }, [])

  return (
    <div>
      <p>Todo Page in React</p>
      <RemoteData
        data={todoList}
        success={(todos) => <TodoUnorderedList todos={todos} />}
      />
    </div>
  )
}
