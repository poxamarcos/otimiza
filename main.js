document.addEventListener('DOMContentLoaded', () => {
    const diaDoEvento = new Date('Sep 30 2023 00:00:00')
    const timeSeconds = diaDoEvento.getTime()

    const time = setInterval(() => {
        const data = new Date()
        const timeSecondsData = data.getTime()

        const diasAteExpirar = timeSeconds - timeSecondsData

        const dias = Math.floor(diasAteExpirar / (1000 * 60 * 60 * 24))
        const horas = Math.floor(diasAteExpirar % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutos = Math.floor(diasAteExpirar % (1000 * 60 * 60) / (1000 * 60))
        const secundos = Math.floor(diasAteExpirar % (1000 * 60) / 1000)

        document.querySelector('#time-da-promocao').innerHTML = `${dias}d ${horas}h ${minutos}m ${secundos}s`

        if (diasAteExpirar < 0) {
            clearInterval(time)
            document.querySelector('#time-da-promocao').innerHTML = 'A Promoção terminou'
            document.querySelector('#pre-text').innerHTML = ''
        }

    })
})

