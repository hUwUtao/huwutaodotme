import React from 'react'
import MarkdownIt from 'markdown-it'
import '../styles/Markdown.css'
import prism from 'markdown-it-prism'

import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-java'

const md = new MarkdownIt()
md.use(prism, {})

interface MarkdownInterface {
  content: string
}

const Markdown: React.FC<MarkdownInterface> = (props: MarkdownInterface) => (
  <article
    dangerouslySetInnerHTML={{ __html: md.render(props.content) }}
    className="prose prose-sm prose-invert min-w-full p-2"
  />
)

export default Markdown
