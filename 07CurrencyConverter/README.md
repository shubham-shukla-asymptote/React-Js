## useId
- useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
- useId should not be used to generate keys in a list. Keys should be generated from your data.
```javascript
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  //.....
}
```
### returns
- useId returns a unique ID string associated with this particular useId call in this particular component.

- when generated you can pass  generated ID to different attributes:
``` javascript
<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
```