let _qtdBancNotes = 0;

function qtdBankNotesWithdraw({
  withdrawValue = 101,
  availableBankNotes = [1, 2, 5, 10],
}) {
  const availableBankNotesOrdered = availableBankNotes.sort((a, b) => a - b);
  const maxAvailableBankNote = availableBankNotesOrdered.pop();
  if (withdrawValue < 1 || maxAvailableBankNote < 1) return _qtdBancNotes;
  if (maxAvailableBankNote <= withdrawValue) {
    _qtdBancNotes += parseInt(withdrawValue / maxAvailableBankNote);
    withdrawValue = withdrawValue % maxAvailableBankNote;
  }
  if (withdrawValue > 0 && availableBankNotes.length) {
    return qtdBankNotesWithdraw({ withdrawValue, availableBankNotes });
  }
  const result = _qtdBancNotes;
  _qtdBancNotes = 0;
  return result;
}

const qtdBankNotes = qtdBankNotesWithdraw({ withdrawValue: 101 });

console.log(qtdBankNotes);
