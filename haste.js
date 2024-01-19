function handleEHChange() {
    total = 0
    for(i = 0; i < 16; i++) {
        total += Number(document.getElementById('eh_'+i).value)
    }
    total *= 10
    ehMeter = document.getElementById('equipHasteMeter')
    document.getElementById('ehFeedback').innerText = `${total}/256`
    ehMeter.value = total.toString()
    updateTotalHaste()
}

function updateTotalHaste() {
    ehValue  = Math.min(Number(document.getElementById('equipHasteMeter').value), 256)
    mhValue  = Math.min(Number(document.getElementById('magicalHasteMeter').value), 448)
    jahValue = Math.min(Number(document.getElementById('jobabilityHasteMeter').value), 256)
    document.getElementById('hasteMeter').value = ehValue + mhValue + jahValue
    updateTotalDelay()
}

function updateTotalDelay() {
    totalHaste = Number(document.getElementById('hasteMeter').value)
    baseDelay = Number(document.getElementById('base_delay_mh').value)
    modifiedDelay = baseDelay * Math.min((1-totalHaste/1024), .8)
    document.getElementById('totalDelay').innerText = modifiedDelay
    document.getElementById('secondsPerSwing').innerText = modifiedDelay / 60
}