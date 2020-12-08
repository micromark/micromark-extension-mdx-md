'use strict'

var test = require('tape')
var micromark = require('micromark')
var syntax = require('.')

test('micromark-extension-mdx-md', function (t) {
  t.equal(
    micromark('<a>', {extensions: [syntax], allowDangerousHtml: true}),
    '<p>&lt;a&gt;</p>',
    'should turn off html (flow)'
  )

  t.equal(
    micromark('a<b>', {extensions: [syntax], allowDangerousHtml: true}),
    '<p>a&lt;b&gt;</p>',
    'should turn off html (text)'
  )

  t.equal(
    micromark('a <https://example.com>', {extensions: [syntax]}),
    '<p>a &lt;https://example.com&gt;</p>',
    'should turn off autolinks'
  )

  t.equal(
    micromark('    a', {extensions: [syntax]}),
    '<p>a</p>',
    'should turn off indented code (1, basic)'
  )

  t.equal(
    micromark('    - a\n    - b', {extensions: [syntax]}),
    '<ul>\n<li>a</li>\n<li>b</li>\n</ul>',
    'should turn off indented code (2, containers)'
  )

  t.equal(
    micromark('    - a\n\n    - b', {extensions: [syntax]}),
    '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n</ul>',
    'should turn off indented code (3, containers)'
  )

  t.equal(
    micromark('    > a\n    > b', {extensions: [syntax]}),
    '<blockquote>\n<p>a\nb</p>\n</blockquote>',
    'should turn off indented code (4, containers)'
  )

  t.equal(
    micromark('a\n   ---', {extensions: [syntax]}),
    '<h2>a</h2>',
    'should turn off indented code (5, interrupt)'
  )

  t.equal(
    micromark('a\n    ---', {extensions: [syntax]}),
    '<h2>a</h2>',
    'should turn off indented code (6, interrupt)'
  )

  t.end()
})
