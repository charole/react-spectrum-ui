import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from '@adobe/react-spectrum';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

function App() {
  const chkRef = useRef(null);
  const [name, setName] = useState('abc');
  const [interval, setInterval] = useState(true);
  const [selected, setSelected] = useState(['c', 'a']);

  const [state, setState] = useState('wizard');

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const changeHandler = (value: string[]) => {
    console.info(value);
  };

  return (
    <div className="App">
      <input type="text" onChange={() => setInterval(!interval)} />
      <br />
      <Checkbox isSelected={interval}>Unsubscribe</Checkbox>
      <br />
      <br />
      <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={changeHandler}
      >
        <Checkbox value="a">a</Checkbox>
        <Checkbox value="b">b</Checkbox>
        <Checkbox value="c">c</Checkbox>
        <Checkbox value="d">d</Checkbox>
      </CheckboxGroup>
      <br />
      <br />
      <RadioGroup
        label="Favorite avatar"
        value={state}
        onChange={(value: string) => {
          setState(value);
        }}
      >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
    </div>
  );
}

export default App;
