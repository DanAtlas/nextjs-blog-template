import React from 'react';

const DarkTheme = () => {
  return (
    <style jsx global>
      {
        'pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ccc;background:#2d2d2d}.hljs ::selection,.hljs::selection{background-color:#515151;color:#ccc}.hljs-comment{color:#999}.hljs-tag{color:#b4b7b4}.hljs-operator,.hljs-punctuation,.hljs-subst{color:#ccc}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-deletion,.hljs-name,.hljs-selector-tag,.hljs-template-variable,.hljs-variable{color:#f2777a}.hljs-attr,.hljs-link,.hljs-literal,.hljs-number,.hljs-symbol,.hljs-variable.constant_{color:#f99157}.hljs-class .hljs-title,.hljs-title,.hljs-title.class_{color:#fc6}.hljs-strong{font-weight:700;color:#fc6}.hljs-addition,.hljs-code,.hljs-string,.hljs-title.class_.inherited__{color:#9c9}.hljs-built_in,.hljs-doctag,.hljs-keyword.hljs-atrule,.hljs-quote,.hljs-regexp{color:#6cc}.hljs-attribute,.hljs-function .hljs-title,.hljs-section,.hljs-title.function_,.ruby .hljs-property{color:#69c}.diff .hljs-meta,.hljs-keyword,.hljs-template-tag,.hljs-type{color:#c9c}.hljs-emphasis{color:#c9c;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#a3685a}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}'
      }
    </style>
  );
};

const LightTheme = () => {
  return (
    <style jsx global>
      {
        'pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#4d4d4c;background:#fff}.hljs ::selection,.hljs::selection{background-color:#d6d6d6;color:#4d4d4c}.hljs-comment{color:#8e908c}.hljs-tag{color:#969896}.hljs-operator,.hljs-punctuation,.hljs-subst{color:#4d4d4c}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-deletion,.hljs-name,.hljs-selector-tag,.hljs-template-variable,.hljs-variable{color:#c82829}.hljs-attr,.hljs-link,.hljs-literal,.hljs-number,.hljs-symbol,.hljs-variable.constant_{color:#f5871f}.hljs-class .hljs-title,.hljs-title,.hljs-title.class_{color:#eab700}.hljs-strong{font-weight:700;color:#eab700}.hljs-addition,.hljs-code,.hljs-string,.hljs-title.class_.inherited__{color:#718c00}.hljs-built_in,.hljs-doctag,.hljs-keyword.hljs-atrule,.hljs-quote,.hljs-regexp{color:#3e999f}.hljs-attribute,.hljs-function .hljs-title,.hljs-section,.hljs-title.function_,.ruby .hljs-property{color:#4271ae}.diff .hljs-meta,.hljs-keyword,.hljs-template-tag,.hljs-type{color:#8959a8}.hljs-emphasis{color:#8959a8;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#a3685a}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}'
      }
    </style>
  );
};

interface themeProps {
  theme: string | null;
}

export default function ThemeStyles({ theme }: themeProps) {
  if (theme == 'dark') {
    return <DarkTheme />;
  }
  return <LightTheme />;
}
