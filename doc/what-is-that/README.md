## Timeline

--

> 1:03:20

<br>
<br>

## 상태 관리란?

---

상태를 관리하는 것.

<br>
<br>

### 그렇다면 상태(state)는 무엇을 의미하는 것인가?

---

주어진 시간에 대해 시스템을 나타내는 것 <br>
언제든지 변경될 수 있다.

즉, 문자열, 배열, 객체 등의 형태로 응용 프로그램에 저장된 데이터를 의미한다.

<br>
<br>

### 다시 상태 관리에 대해

---

> 상태를 관리하는 방법에 대한 것 -> 프로덕트가 커짐에 따라 어려움도 커짐

> React에서는 단방향 바인딩이므로 props Drilling 이슈도 존재

> redux와 mobx등의 라이브러리를 사용하여 해결하기도 함.

<br>
<br>

## ok. 그래서 react-query가 뭔데?

---

react-query

```
Fetch, cache and update data in your React and React Native applications all without touching any "global state".

"글로벌 상태"를 건드리지 않고도 React 및 React Native 애플리케이션에서 데이터를 모두 가져오고, 캐시하고, 업데이트할 수 있습니다.
```

> 데이터 가져오기

> 캐시

> 동기화

> 데이터 업데이트

<br>
<br>

### 필수!!

---

react에서 react-query를 사용하려면
QueryClientProvider 필수!!

example

```js
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

<br>
<br>

### 3가지 개념

---

> 1. Queries

> 2. Mutations

> 3. Query Invalidation

<br>
<br>

### Queries

```js
import { UseQuery } from 'react-query';

function App() {
  const info = useQuery('todos', fetchTodoList);

  // todos -> Query key
  // fetchTodoList -> Query function
}
```

<br>

Query key는 key, value 맵핑 구조로 생각하자.

<br>
<br>

### Mutations
