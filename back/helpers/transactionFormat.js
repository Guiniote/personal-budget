const transactionFormat = (transaction) => {
  const transactionFormated = {
    id: transaction.id,
    user: `${transaction.user.name} ${transaction.user.surname}`,
    concept: transaction.concept,
    category: transaction.category.categoryName,
    amount: transaction.amount,
    date: transaction.date,
    transactionType: transaction.transactionType.transactionTypeName,
  }
  return transactionFormated
}

module.exports = {
  transactionFormat,
}
