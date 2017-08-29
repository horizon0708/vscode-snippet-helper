export function parseToSnippet(string){
    return string.split('\n')
    .map(x=> x.replace(/"/g, '\''))
    .map(x=> x.replace(/\s{4}/g, '\\t'))
    .map((x, i, arr)=> {
        return i < arr.length-1 ? `\t\t"${x}",` : `\t\t"${x}"`;
    })
    .join('\n');
}

export function addDefault(body, opt){
    return (`"${opt.title}": {
    "prefix": "${opt.prefix}",
    "description": "${opt.description}",
    "body": [
${body}
    ]
}`
    );
}

