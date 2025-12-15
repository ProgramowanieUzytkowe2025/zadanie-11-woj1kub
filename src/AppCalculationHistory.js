import React from 'react';

export default function AppCalculationHistory({ history = [], onLoadAtIndex = () => {} }) {
  if (!history || history.length === 0) {
    return <div>Brak wykonanych działań.</div>;
  }

  return (
    <div>
      <h3>Historia działań</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>#</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>A</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>B</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Operacja</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Wynik</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}></th>
          </tr>
        </thead>
        <tbody>
          {history.map((rec, idx) => (
            <tr key={idx}>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #eee' }}>{idx + 1}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #eee' }}>{rec.a}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #eee' }}>{rec.b}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #eee' }}>{rec.operation}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #eee' }}>{String(rec.result)}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #eee' }}>
                <button onClick={() => onLoadAtIndex(idx)}>Wczytaj</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
