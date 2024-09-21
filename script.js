

document.getElementById('calculate-btn').addEventListener('click', function (event) {
      const income = getInputValueById('income')
      const software = getInputValueById('software')
      const courses = getInputValueById('courses')
      const internet = getInputValueById('internet')
      const totalCost = software + courses + internet
      const newBalance = income - totalCost
      const resultDisplay = document.getElementById('results')
      resultDisplay.classList.remove('hidden')
      const toalExpenses = document.getElementById('total-expenses')
      toalExpenses.innerText = parseFloat(toalExpenses.innerText) totalCost
      const balance = parseFloat(document.getElementById('balance').innerText) + newBalance
      document.getElementById('balance').innerText = balance
      return (balance)
})
document.getElementById('calculate-savings').addEventListener('click', function () {
      const income = getInputValueById('income')
      const software = getInputValueById('software')
      const courses = getInputValueById('courses')
      const internet = getInputValueById('internet')
      const totalCost = software + courses + internet
      const newBalance = income - totalCost
      const remainingBalance = document.getElementById('remaining-balance')
      const savings = getInputValueById('savings')
      const sevingAmout = document.getElementById('savings-amount')
      const parentage = (savings / 100) * newBalance
      const avableBalench = newBalance - parentage
      remainingBalance.innerText = parseFloat(remainingBalance.innerText) + avableBalench
      sevingAmout.innerText = parseFloat(sevingAmout.innerText) + parentage
})