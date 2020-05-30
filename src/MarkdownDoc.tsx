import React from 'react';
const markdownIt = require('markdown-it')({
    typographer: true,
    html: true,
}).use(require('markdown-it-div'));

type MarkdownDocProps = {
    source: string
}

export const MarkdownDoc = ({ source }: MarkdownDocProps) =>
    <div dangerouslySetInnerHTML={{ __html: markdownIt.render(source) }} />