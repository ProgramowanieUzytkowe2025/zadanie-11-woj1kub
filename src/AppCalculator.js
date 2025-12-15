import React, { useState } from 'react';
import { AppActionButton } from './AppActionButton';
import AppCalculationHistory from './AppCalculationHistory';

export function AppCalculator() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    function wyniki(operacja) {
        const na = parseFloat(a);
        const nb = parseFloat(b);
        let wynik;

        if (isNaN(na) || isNaN(nb)) {
            wynik = 'Nieprawidłowe dane';
            setResult(wynik);
            return;
        }

        switch (operacja) {
            case 'Dodaj':
                wynik = na + nb;
                break;
            case 'Odejmij':
                wynik = na - nb;
                break;
            case 'Mnóż':
                wynik = na * nb;
                break;
            case 'Dziel':
                wynik = nb === 0 ? 'Nie można dzielić przez 0' : na / nb;
                break;
            default:
                wynik = 'Nieznana operacja';
        }

        setResult(String(wynik));

        const record = { a: na, b: nb, operation: operacja, result: wynik, time: Date.now() };
        setHistory(h => [...h, record]);
    }

    function loadHistoryAt(index) {
        const rec = history[index];
        if (!rec) return;
        setA(String(rec.a));
        setB(String(rec.b));
        setResult(String(rec.result));
        setHistory(h => h.slice(0, index + 1));
    }

    return (
        <div className="app-calculator">
            <div style={{ marginBottom: 8 }}>
                <label>
                    A:
                    <input type="number" value={a} onChange={e => setA(e.target.value)} step="any" style={{ marginLeft: 8 }} />
                </label>
            </div>
            <div style={{ marginBottom: 8 }}>
                <label>
                    B:
                    <input type="number" value={b} onChange={e => setB(e.target.value)} step="any" style={{ marginLeft: 8 }} />
                </label>
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <AppActionButton label="Dodaj" opearation={() => { wyniki('Dodaj'); }} />
                <AppActionButton label="Odejmij" opearation={() => { wyniki('Odejmij'); }} />
                <AppActionButton label="Mnóż" opearation={() => { wyniki('Mnóż'); }} />
                <AppActionButton label="Dziel" opearation={() => { wyniki('Dziel'); }} />
            </div>

            <div style={{ marginTop: 8 }}>
                <input type="text" readOnly value={result} style={{ width: '100%' }} />
            </div>

            <div style={{ marginTop: 12 }}>
                {(() => {
                    const na = parseFloat(a);
                    const nb = parseFloat(b);
                    if (isNaN(na) || isNaN(nb)) {
                        return <input type="text" readOnly value="Nieprawidłowe dane" style={{ width: '100%' }} />;
                    }
                    if (na > nb) {
                        return <input type="text" readOnly value={`A (${na}) jest większe od B (${nb})`} style={{ width: '100%' }} />;
                    } else if (na < nb) {
                        return <input type="text" readOnly value={`A (${na}) jest mniejsze od B (${nb})`} style={{ width: '100%' }} />;
                    } else {
                        return <input type="text" readOnly value={`A (${na}) jest równe B (${nb})`} style={{ width: '100%' }} />;
                    }
                })()}
            </div>

            <div style={{ marginTop: 16 }}>
                <AppCalculationHistory history={history} onLoadAtIndex={loadHistoryAt} />
            </div>
        </div>
    );
}