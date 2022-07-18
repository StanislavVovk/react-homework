function minCharacter({target, length}) {
    return `${target} must be at least ${length} characters long`
}

function maxCharacter({target, length}) {
    return `${target} must be at most ${length} characters long`
}

export {minCharacter, maxCharacter}