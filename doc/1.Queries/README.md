## Queries

<br />

### Basics

---

> Query는 고유 키에 연결된 비동기 데이터 소스에 대한 선언적 종속성이다.
> <br/><br/>
> Query는 promise 기반 메소드 (GET 및 POST 메소드 포함)와 함께 사용하여 서버에서 데이터를 가져올 수 있습니다.
> <br /><br />
> 보통 CRUD 중 Reading에만 사용한다고 한다.

<br />

```js
import { useQuery } from 'react-query';

function App() {
  const info = useQuery('todo', fetchTodoList);
}
```

<br />
