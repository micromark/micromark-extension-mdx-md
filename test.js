import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdxMd} from './index.js'

test('micromark-extension-mdx-md', function () {
  assert.equal(
    micromark('<a>', {extensions: [mdxMd], allowDangerousHtml: true}),
    '<p>&lt;a&gt;</p>',
    'should turn off html (flow)'
  )

  assert.equal(
    micromark('a<b>', {extensions: [mdxMd], allowDangerousHtml: true}),
    '<p>a&lt;b&gt;</p>',
    'should turn off html (text)'
  )

  assert.equal(
    micromark('a <https://example.com>', {extensions: [mdxMd]}),
    '<p>a &lt;https://example.com&gt;</p>',
    'should turn off autolinks'
  )

  assert.equal(
    micromark('    a', {extensions: [mdxMd]}),
    '<p>a</p>',
    'should turn off indented code (1, basic)'
  )

  assert.equal(
    micromark('    - a\n    - b', {extensions: [mdxMd]}),
    '<ul>\n<li>a</li>\n<li>b</li>\n</ul>',
    'should turn off indented code (2, containers)'
  )

  assert.equal(
    micromark('    - a\n\n    - b', {extensions: [mdxMd]}),
    '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n</ul>',
    'should turn off indented code (3, containers)'
  )

  assert.equal(
    micromark('    > a\n    > b', {extensions: [mdxMd]}),
    '<blockquote>\n<p>a\nb</p>\n</blockquote>',
    'should turn off indented code (4, containers)'
  )

  assert.equal(
    micromark('a\n   ---', {extensions: [mdxMd]}),
    '<h2>a</h2>',
    'should turn off indented code (5, interrupt)'
  )

  assert.equal(
    micromark('a\n    ---', {extensions: [mdxMd]}),
    '<h2>a</h2>',
    'should turn off indented code (6, interrupt)'
  )
})
