

const EOL = typeof window === 'undefined' ? import('os').then(res => {
    return res.EOL
}) : '\n'

type Results = {
    scripts: Array<{
        start: number
        text: string
        end: number
        targetFreq: number
    }>
}

function lrcParser(lrc: string) {
    let lines = lrc.split(EOL)
    const timeStart = /\[(\d*\:\d*\.?\d*)\]/ // i.g [00:10.55]
    const scriptText = /(.+)/ // Havana ooh na-na (ayy)
    const timeEnd = timeStart
    const startAndText = new RegExp(timeStart.source + scriptText.source)
    const infos = []
    const scripts = []
    const result: Results = {
        scripts: []
    }

    for(let i = 0; !startAndText.test(lines[i]); i++) {
        infos.push(lines[i])
    }

    infos.reduce((result, info) => {
        const [key, value] = info.trim().slice(1, -1).split(': ')
        result[key] = value
        return result
    }, result)

    lines.splice(0, infos.length) // remove all info lines
    const qualified = new RegExp(startAndText.source + '|' + timeEnd.source)
    lines = lines.filter(line => qualified.test(line))

    for (let i = 0, l = lines.length; i < l; i++) {
        const matches = startAndText.exec(lines[i])
        const timeEndMatches = timeEnd.exec(lines[i + 1])
        if (matches && timeEndMatches) {
            const [, start, text] = matches
            const [, end] = timeEndMatches
            scripts.push({
                start: convertTime(start),
                text,
                end: convertTime(end),
                targetFreq: Math.floor(Math.random() * (150 - 100 + 1)) + 100
            })
        }
    }

    result.scripts = scripts
    console.log(result)
    return result
}
function convertTime(strings: string) {
    let string = strings.split(':');
    const minutes = parseInt(string[0], 10)
    const seconds = parseFloat(string[1])
    if (minutes > 0) {
        const sc = minutes * 60 + seconds
        return parseFloat(sc.toFixed(2))
    }
    return seconds
}
