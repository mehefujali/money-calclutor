

document.getElementById('calculate-btn').addEventListener('click', function (event) {
      const income = getInputValueById('income')
      const software = getInputValueById('software')
      const courses = getInputValueById('courses')
      const internet = getInputValueById('internet')
      const totalCost = software + courses + internet
      const balance = income - totalCost
      const resultDisplay = document.getElementById('results')
      resultDisplay.classList.remove('hidden')
      document.getElementById('total-expenses').innerText = totalCost
      document.getElementById('balance').innerText = balance
})
document.getElementById('calculate-savings').addEventListener('click', function () {

      const savings = getInputValueById('savings')
      const parentage = (savings / 100) * balance
      const avableBalench = balance - parentage
})