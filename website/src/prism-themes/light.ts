/**
 * Light Prism Theme - Gallery Style
 * Warm, artistic code colors
 */

export default {
  plain: {
    color: '#1A1A1A',
    backgroundColor: '#FAF8F5',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#8B8682',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#6B6B6B',
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#B8956A',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#CE9178',
      },
    },
    {
      types: ['entity', 'url', 'attr-value', 'keyword', 'control', 'directive', 'unit'],
      style: {
        color: '#D4A574',
      },
    },
    {
      types: ['statement', 'regex', 'at-rule'],
      style: {
        color: '#9CDCFE',
      },
    },
    {
      types: ['placeholder', 'variable'],
      style: {
        color: '#9B9B9B',
      },
    },
    {
      types: ['function', 'important', 'class-name'],
      style: {
        color: '#DCDCAA',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
};
