import {useMemo} from "react";

export const useFindWords = (words, text) => {
    console.log(words,"33",text)
    const template = useMemo(() => {
        let regex = '/|'
        words.forEach(({body}) => {
            let tagString = body.slice(1)
            regex += tagString + '|'
        })
        regex = regex.slice(0, regex.length )
        regex = regex + '/'
        return new RegExp(regex, 'gi')
    }, [text, words])
    return template
    console.log(template)
}