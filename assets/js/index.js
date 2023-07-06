'use strict'

const inputBodyHeight = document.body.querySelector('#body-height')
const inputAge = document.body.querySelector('#age')
const inputBodyWeight = document.body.querySelector('#body-weight')
const inputGenderShe = document.body.querySelector('#she')
const inputGenderHe = document.body.querySelector('#he')
const ActivityLevel = document.body.querySelector('#activity-level')
const calculatorBmr = document.body.querySelector('.bmr-calculate')
const outputBmrKcal = document.body.querySelector('.bmr-kcal')
const outputBmrKj = document.body.querySelector('.bmr-kj')
const outputTotalKcal = document.body.querySelector('.total-kcal')
const outputTotalKj = document.body.querySelector('.total-kj')

calculatorBmr.addEventListener('submit', event => {
  event.preventDefault()

  const heightValue = inputBodyHeight.value
  const ageValue = inputAge.value
  const weightValue = inputBodyWeight.value

  let ActivityLevelValue = Number(ActivityLevel.options[ActivityLevel.selectedIndex].value)

  let bodyWeightCalc
  let ageCalc
  let bodyHeightCalc
  let resultBmr
  let resultTotal

  if (inputGenderShe.checked) {
    bodyWeightCalc = 9.6 * Number(weightValue)
    bodyHeightCalc = 1.8 * Number(heightValue)
    ageCalc = 4.7 * Number(ageValue)
    resultBmr = 655.1 + bodyWeightCalc + bodyHeightCalc - ageCalc
    resultTotal = resultBmr * ActivityLevelValue
    outputBmrKcal.textContent = resultBmr.toFixed(3)
    outputBmrKj.textContent = (resultBmr * 4.184).toFixed(3)
    outputTotalKcal.textContent = resultTotal.toFixed(3)
    outputTotalKj.textContent = (resultTotal * 4.184).toFixed(3)
  } else if (inputGenderHe.checked) {
    bodyWeightCalc = 13.7 * weightValue
    bodyHeightCalc = 5 * heightValue
    ageCalc = 6.8 * ageValue
    resultBmr = 66.47 + bodyWeightCalc + bodyHeightCalc - ageCalc
    resultTotal = resultBmr * ActivityLevelValue
    outputBmrKcal.textContent = resultBmr.toFixed(3)
    outputBmrKj.textContent = (resultBmr * 4.184).toFixed(3)
    outputTotalKcal.textContent = resultTotal.toFixed(3)
    outputTotalKj.textContent = (resultTotal * 4.184).toFixed(3)
  }
})
