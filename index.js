let foo = document.getElementById('foo')
const findAngle = (element, event) => {
    const elementRect = element.getBoundingClientRect()
    const centerX = elementRect.left + elementRect.width / 2
    const centerY = elementRect.top + elementRect.height / 2
    const baseVector = {x: 0, y: -1}
    const currentVector = {
        x: event.clientX - centerX,
        y: event.clientY - centerY
    }
    const vectorScalar = baseVector.y * currentVector.y

    const baseVectorModule = Math.sqrt(baseVector.y * baseVector.y)
    const currentVectorModule =
        Math.sqrt(currentVector.x * currentVector.x + currentVector.y * currentVector.y)

    const vectorsModulesMultiplication = baseVectorModule * currentVectorModule

    const Deg = Math.acos(vectorScalar / vectorsModulesMultiplication) * (180 / Math.PI)
    let Angle = Deg
    let x = true
    
    console.log(Angle)

    if (event.clientX < centerX) {
        Angle = 360 - Deg
    } 
    return(Angle)
}
const setGradient = (element, event) => {
    Angle = findAngle(element, event)

    element.style.cssText = `background-image: linear-gradient(${Angle}deg, rgba(62,194,243,1) 0%, rgba(201,40,233,1) 100%);`

}

foo.addEventListener("mousemove", e => {
    setGradient(foo, e)
})


