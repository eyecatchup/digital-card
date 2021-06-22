window.addEventListener('load', (event) => {
    const btnOpen = document.querySelector('#open')
    const btnFlip = document.querySelector('#flip')
    const envelope = document.querySelector('.envelope')
    const cardInner = document.querySelector('.card-inner')
    const cardFront = document.querySelector('.card-front')
    const cardBack = document.querySelector('.card-back')


    let cardFrontImage = new URLSearchParams(window.location.search).get("front")
    let cardBackImage = new URLSearchParams(window.location.search).get("back")

    if (cardFrontImage) {
        cardFront.querySelector('img').src = decodeURIComponent(cardFrontImage)
    }

    if (cardBackImage) {
        cardBack.querySelector('img').src = decodeURIComponent(cardBackImage)
    }

    // init click handler
    

    btnOpen.addEventListener('click', (e) => {
        let flipBtnStyle, openBtnText, timeoutms
        if (envelope.classList.contains('open')) {
            envelope.classList.remove('open')
            flipBtnStyle = 'none'
            openBtnText = 'Karte öffnen'
            timeoutms = 500
        } else {
            envelope.classList.add('open')
            flipBtnStyle = 'inline-block'
            openBtnText = 'Karte schließen'
            timeoutms = 2500
        }
        setTimeout(() => {
            btnFlip.style.display = flipBtnStyle
            btnOpen.innerText = openBtnText
        }, timeoutms)
    })
    btnFlip.addEventListener('click', (e) => {
        cardInner.classList.toggle('flipped')
    })
});