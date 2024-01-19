function loadHandler() {
    handleEHChange()
    checkStoreTP()
    updateAttacksPerRound()
}

function updateBaseDelay() {
    handleEHChange()
    checkStoreTP()
}

function updateEquipmentField(shortname, longname) {
    const elements = Array.from(
        document.querySelectorAll(
            Array.from({length:16}, (v, i) => `#${shortname}_${i}`)
        )
    )
    total = elements.reduce((p, t) => p + Number(t.value), 0)
    document.getElementById(`${longname}_total`).innerText = total
}