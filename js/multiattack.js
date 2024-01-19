function updateMultiAttackPercentage(shortname, longname) {
    updateEquipmentField(shortname, longname)
    updateAttacksPerRound()
}  

function updateAttacksPerRound() {
    const da_percent = Number(document.getElementById('doubleattack_total').innerText)
    const ta_percent = Number(document.getElementById('tripleattack_total').innerText)
    const qa_percent = Number(document.getElementById('quadrupleattack_total').innerText)
    avg_attacks = 1 + ((da_percent/100) * 1)
                    + ((ta_percent/100) * 2)
                    + ((qa_percent/100) * 3)
    document.getElementById('attacksPerRound').innerText = avg_attacks.toFixed(2)
}