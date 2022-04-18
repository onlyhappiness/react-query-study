## 시작하기

<br />

App.js

```js
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { getTodos, postTodo } from '../my-api';

// create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  // Quries
  const query = useQuery('todos', getTodos);

  // Mutations
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQuries('todos');
    },
  });

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
```

> Queries, Mutations, Query-Invalidation <br/><br/> 이 3가지는 react-query의 핵심 기능의 대부분을 구성한다.
