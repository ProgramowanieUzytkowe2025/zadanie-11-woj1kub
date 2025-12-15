
export function AppActionButton({ label, opearation, operation }) {
    const op = typeof opearation === 'function' ? opearation : operation;

    function buttonClicked() {
        if (typeof op === 'function') {
            op();
        } else {
            console.warn('Brak operacji dla przycisku', label);
        }
    }

    return (
        <button onClick={buttonClicked}>{label}</button>
    );
}