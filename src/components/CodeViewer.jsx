import { useMemo } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeViewer({ code }) {
  const highlightedCode = useMemo(
    () => Prism.highlight(code, Prism.languages.jsx, "jsx"),
    [code]
  );

  return (
    <pre className="language-jsx">
      <code
        className="language-jsx"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
}
