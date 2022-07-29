import { Checkbox, CheckboxGroup } from '@adobe/react-spectrum';
import { useEffect, useRef, useState } from 'react';

function App() {
  const chkRef = useRef(null);
  const [name, setName] = useState('abc');
  const [interval, setInterval] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="App">
      <input type="text" onChange={() => setInterval(!interval)} />
      <br />
      <Checkbox isSelected={interval} onChange={(value) => setInterval(value)}>
        Unsubscribe
      </Checkbox>
      <br />
      <br />
      <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={(value) => setSelected(value)}
      >
        <Checkbox value="a">a</Checkbox>
        <Checkbox value="b">b</Checkbox>
        <Checkbox value="c">c</Checkbox>
        <Checkbox value="d">d</Checkbox>
      </CheckboxGroup>
    </div>
  );
}

export default App;
