let foo = document.getElementById('foo')

foo.addEventListener('mousemove', e => {
    const fooRect = foo.getBoundingClientRect()

    const centerX = fooRect.left + fooRect.width / 2
    const centerY = fooRect.top + fooRect.height / 2
    let baseVectorX = 0
    const baseVectorY = 107 - centerY

    const curentVectorX = e.clientX - centerX
    const curentVectorY = e.clientY - centerY
    const vectorScalar = baseVectorX * curentVectorX + baseVectorY * curentVectorY

    const vectorModule =
        Math.sqrt(baseVectorX * baseVectorX + baseVectorY * baseVectorY) *
        Math.sqrt(curentVectorX * curentVectorX + curentVectorY * curentVectorY)
    let Deg = Math.acos(vectorScalar / vectorModule) * (180 / Math.PI)

    if (e.clientX < centerX) {
        console.log(Deg)
        Deg = 360 - Deg
    }
    console.log(Deg)

    foo.style.cssText = `
    background: rgb(62,194,243);
background: linear-gradient(${Deg}deg, rgba(62,194,243,1) 0%, rgba(201,40,233,1) 100%);
    background-size: 1200px 900px ;
    background-position: center;
    `
})
