const q = document.querySelectorAll.bind(document)

let guess,
  current,
  earliest = 8,
  latest = 20

// console.log(moment.tz.names())
// console.log(Intl.supportedValuesOf('timeZone'))
//gist.github.com/mattjohnsonpint/7d55b63631ea067bd8b5

q('.tz').forEach(el => {
  el.addEventListener('click', e => {
    e.currentTarget.classList.toggle('active')
    renderOurs()
  })
})

let activateCurrentZone = () => {
  guess = moment.tz.guess(true)
  const el = document.querySelector('[data-tz="'+ guess +'"]')
  current = +el.dataset.offset
  if (el && guess !== 'America/Denver') el.click()
}
activateCurrentZone()

function renderOurs() {
  let active = q('.active'),
    zones = getHours(),
    message = active.length ? `Best time to work together <h1>${renderYours(zones)}</h1> your time <h3>their time</h3>` : 'Select at least one time zone.'
  document.getElementById('ours').innerHTML = message
}

function renderYours(zones) {
  let message = '? – ?'
  if (zones.hasOwnProperty(guess)) {
    message = moment(zones[guess][0], 'H').format('ha') +' – '+ moment(zones[guess][1], 'H').format('ha')
  }
  return message
}

function getHours() {
  let zones = {},
    actives = q('.active'),
    min = +actives[0].dataset.offset,
    max = +actives[actives.length - 1].dataset.offset
  actives.forEach(el => {
    // zones[moment.tz(el.dataset.tz).zoneAbbr()] = [
    zones[el.dataset.tz] = [
      earliest + +el.dataset.offset - min,
      latest + +el.dataset.offset - max
    ]
  })
  return zones
}
