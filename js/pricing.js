const switchButton = document.getElementById("switch-pricing")
const switchLabels = document.getElementsByClassName("toogle__plan")
const pricingPriceLabels = document.getElementsByClassName("pricing__price--title")
const pricingPerLabels = document.getElementsByClassName("pricing__per")

const yearlyPrices = ['190', '390', '990']
const monthlyPrices = ['19', '39', '99']

switchButton.addEventListener("click", () => {
    if (switchButton.checked)
        setYearly()
    else
        setMonthly()
})

const setMonthly = () => {
    for (let i = 0; i < switchLabels.length; i++) {
        switchLabels[i].classList.toggle("selected")
    }

    setMonthlyPrices()
}

const setYearly = () => {
    for (let i = 0; i < switchLabels.length; i++) {
        switchLabels[i].classList.toggle("selected")
    }

    setYearlyPrices()
}

const setMonthlyPrices = () => {
    for (let i = 0; i < pricingPriceLabels.length; i++) {
        pricingPriceLabels[i].textContent = `$${monthlyPrices[i]}.00`
        pricingPerLabels[i].textContent = `per month`
    }
}

const setYearlyPrices = () => {
    for (let i = 0; i < pricingPriceLabels.length; i++) {
        pricingPriceLabels[i].textContent = `$${yearlyPrices[i]}.00`
        pricingPerLabels[i].textContent = `per year`
    }
}

setMonthlyPrices()
