function calculateTpPerHit(modifiedDelay, storeTp) {
    total = 0
    if (modifiedDelay < 180) {
        total = 61 + (((modifiedDelay - 180) * 63) / 360)
    } else if (modifiedDelay < 541) {
        total = 61 + (((modifiedDelay - 180) * 88) / 360)
    } else if (modifiedDelay < 631) {
        total = 149 + (((modifiedDelay - 540) * 20) / 360)
    } else if (modifiedDelay < 721) {
        total = 154 + (((modifiedDelay - 630) * 28) / 360)
    } else if (modifiedDelay < 901) {
        total = 161 + (((modifiedDelay - 720) * 24) / 360)
    } else {
        total = 173 + (((modifiedDelay - 900) * 28) / 360)
    }
    return Math.floor(total) + Math.floor(total * (storeTp/100))
}

function checkStoreTP() {
    total = 0
    for (i = 0; i < 16; i++) {
        total += Number(document.getElementById('stp_'+i).value)
    }
    document.getElementById('storetp_total').innerText = total.toString()
    handleTPCalculationUpdate()
}

function handleTPCalculationUpdate() {
    stp = Number(document.getElementById('storetp_total').innerText)
    baseDelay = Number(document.getElementById('base_delay_mh').value)
    tpPerHit = calculateTpPerHit(baseDelay, stp)
    document.getElementById('tp_per_hit').innerText = tpPerHit
    document.getElementById('hits_to_weaponskill').innerText = Math.floor(1000 / tpPerHit)
}