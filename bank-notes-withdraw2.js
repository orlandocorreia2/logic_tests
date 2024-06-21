function withdrawal({
  withdrawValue = 101,
  availableBankNotes = [1, 2, 5, 10],
}) {
  let response = "";
  let qtdBankNotes = 0;
  const availableBankNotesOrdered = availableBankNotes
    .sort((a, b) => a - b)
    .reverse();
  for (let i = 0; i < availableBankNotesOrdered.length; i++) {
    if (withdrawValue === 0) break;
    if (availableBankNotesOrdered[i] <= withdrawValue) {
      const qtdNotes = parseInt(withdrawValue / availableBankNotesOrdered[i]);
      qtdBankNotes += qtdNotes;
      response += `${!!response ? ", " : ""}${qtdNotes} of ${
        availableBankNotesOrdered[i]
      }`;
      withdrawValue = withdrawValue % availableBankNotesOrdered[i];
    }
  }
  response = `You received ${response}. Total of notes ${qtdBankNotes}`;
  return response;
}

console.log(withdrawal({ withdrawValue: 17 }));
