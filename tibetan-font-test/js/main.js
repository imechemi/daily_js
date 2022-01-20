


const sampleContainer = document.querySelector('.container')
const sampleTextInput = document.querySelector("[name='sample-text-input']")
const fontSizeInput = document.querySelector('[name="font-size"]')
const lineSpacingInput = document.querySelector('[name="line-spacing"]')

const fontNames = [
  'DDC Uchen', 
  'Jomolhari',
  'Monlam Uni Dutsa1',
  'Monlam Uni Dutsa2',
  'Monlam Uni Chouk',
  'Monlam Uni Choukmatik',
  'Monlam Uni OuChan 1',
  'Monlam Uni OuChan 2 Regular',
  'Monlam Uni OuChan 3',
  'Monlam Uni OuChan 4',
  'Monlam Ouchan 2',
  'Himalaya',
  'Qomolangma Betsu',
  'Qomolangma Chuyig',
  'Qomolangma Drutsa',
  'Qomolangma Tsumachu',
  'Qomolangma Tsuring',
  'Qomolangma Tsutong'
].sort()

for (const font of fontNames) {
  const sample = createSample(font)
  sampleContainer.appendChild(sample)
}

sampleTextInput.addEventListener('keyup', function(e) {
  updateSamples({
    content: e.target.value,
    fontSize: fontSizeInput.value,
    lineSpacing: lineSpacingInput.value
  })
})

lineSpacingInput.addEventListener('change', function(e) {
  updateSamples({
    content: sampleTextInput.value,
    fontSize: fontSizeInput.value,
    lineSpacing: e.target.value,
  })
})

fontSizeInput.addEventListener('change', function(e) {
  updateSamples({
    content: sampleTextInput.value,
    fontSize: e.target.value,
    lineSpacing: lineSpacingInput.value
  })
})

function updateSamples(properties) {
  const samples = document.querySelectorAll('.sample')
  const {content, lineSpacing, fontSize} = properties
  for (const sample of samples) {
    const p = sample.querySelector('p')
    p.textContent = content
    p.style.lineHeight = lineSpacing
    p.style.fontSize = fontSize + 'px'
  }
}

function createSample(font) {
  const title = document.createElement('h2')
  title.textContent = font

  const p = document.createElement('p')
  p.style.fontFamily = font
  p.textContent = sampleTextInput.value
  p.style.fontSize = fontSizeInput.value + 'px'

  const div = document.createElement('div')
  div.setAttribute('class', 'sample')
  div.appendChild(title)
  div.appendChild(p)
  return div
}


const settingButton = document.querySelector('#settings')

settingButton.addEventListener('click', function() {
  document.body.classList.toggle('is-setting-open')
})