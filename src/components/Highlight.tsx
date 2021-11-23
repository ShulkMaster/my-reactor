import High from 'highlight.js';
import {useRef, useLayoutEffect} from 'react';
import 'highlight.js/styles/github-dark.css';
import 'highlight.js/styles/vs2015.css';

export type HighlightProps = {
  code: string;
}

export const Highlight = ({code}: HighlightProps) => {
  const ref = useRef<HTMLPreElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    High.highlightElement(element);
  }, [ref]);

  return (
    <pre ref={ref} style={{padding: '.5em', margin: '1em 0'}}>
      <code className="language-typescript" children={code}/>
    </pre>
  );
};
