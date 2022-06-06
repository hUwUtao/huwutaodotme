import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Markdown from './Markdown'
import GlobalSuspense from './GlobalSuspense'

interface LazyMarkdownInterface {
  url: string
}

const LazyMarkdown: React.FC<LazyMarkdownInterface> = (
  props: LazyMarkdownInterface
) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setContent(res.data)
    })
  }, [props.url])

  return <>{content ? <Markdown content={content} /> : <GlobalSuspense />}</>
}
export default LazyMarkdown
