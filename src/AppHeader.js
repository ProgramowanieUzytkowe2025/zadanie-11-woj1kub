import React, { useState, useEffect } from 'react';

export default function AppHeader() {
  const [size, setSize] = useState('medium');

  useEffect(() => {
    const map = { small: '14px', medium: '18px', large: '24px' };
    document.documentElement.style.fontSize = map[size];
  }, [size]);

  const btn = (key, label, fs) => (
    <button
      type="button"
      aria-label={label}
      onClick={() => setSize(key)}
      style={{
        fontSize: fs,
        padding: 6,
        minWidth: 36,
        height: 36,
        lineHeight: '1',
        border: size === key ? '2px solid #111' : '1px solid #ccc',
        borderRadius: 4,
        background: 'white',
        cursor: 'pointer'
      }}
    >
      A
    </button>
  );

  return (
    <div className="app-header" style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="imie">Wojciech Kubowicz</div>
      </div>
      <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
        {btn('small', 'Mała czcionka', '12px')}
        {btn('medium', 'Średnia czcionka', '16px')}
        {btn('large', 'Duża czcionka', '20px')}
      </div>
    </div>
  );
}