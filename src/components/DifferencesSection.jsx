import Button from './Button/Button';
import { differences } from '../data';
import { useState } from 'react';

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handlerClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>What makes us different from others</h3>

      <Button
        isActive={contentType === 'way'}
        onClick={() => handlerClick('way')}
      >
        Аpproach
      </Button>
      <Button
        isActive={contentType === 'easy'}
        onClick={() => handlerClick('easy')}
      >
        Availability
      </Button>
      <Button
        isActive={contentType === 'program'}
        onClick={() => handlerClick('program')}
      >
        Concentration
      </Button>

      {!contentType && <p>Push on button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
