/**
 * Dark Prism Theme - Gallery Style
 * Elegant dark mode code colors
 */

export default {
  plain: {
    color: '#E8E8E8',
    backgroundColor: '#2C2C2C',
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
        color: '#D4D4D4',
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#B5CEA8',
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
        color: '#E8E8E8',
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
