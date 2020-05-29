import React from 'react';
const markdownIt = require('markdown-it')('commonmark').use(require('markdown-it-div'));

type DocProps = {
    source: string
}

export const Doc = ({ source }: DocProps) => <div dangerouslySetInnerHTML={{ __html: markdownIt.render(source) }} />