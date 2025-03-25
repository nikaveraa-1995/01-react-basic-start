import { useState, useRef } from 'react';
import Button from './Button/Button';

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help',
  });
  // const [name, setName] = useState('');
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState('help');

  function handleNameChange(event) {
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
  }

  // function toggleError() {
  // setHasError(prev => !prev);
  // }

  return (
    <section>
      <h3>Feedback</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? '2px solid red' : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason for contact</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={event =>
            setForm(prev => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="soggest">Offers</option>
        </select>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
      </form>
      <StateVsRef />
    </section>
  );
}
