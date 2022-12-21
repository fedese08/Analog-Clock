setHour()
function setHour(){
    const deg = 6
    const hour = document.getElementById('hr')
    const minute = document.getElementById('min')
    const second = document.getElementById('sec')

    setInterval(() => {
        let date = new Date()
        let h = date.getHours() * 30
        let m = date.getMinutes() * deg
        let s = date.getSeconds() * deg

        hour.style.transform = `rotateZ(${(h)+(m/12)}deg)`
        minute.style.transform = `rotateZ(${(m)}deg)`
        second.style.transform = `rotateZ(${(s)}deg)`
    })

}