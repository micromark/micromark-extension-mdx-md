import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdxMd} from 'micromark-extension-mdx-md'

test('mdxMd', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('micromark-extension-mdx-md')).sort(),
      ['mdxMd']
    )
  })

  await t.test('should turn off html (flow)', function () {
    assert.equal(
      micromark('<a>', {extensions: [mdxMd()], allowDangerousHtml: true}),
      '<p>&lt;a&gt;</p>'
    )
  })

  await t.test('should turn off html (text)', function () {
    assert.equal(
      micromark('a<b>', {extensions: [mdxMd()], allowDangerousHtml: true}),
      '<p>a&lt;b&gt;</p>'
    )
  })

  await t.test('should turn off autolinks', function () {
    assert.equal(
      micromark('a <https://example.com>', {extensions: [mdxMd()]}),
      '<p>a &lt;https://example.com&gt;</p>'
    )
  })

  await t.test('should turn off indented code (1, basic)', function () {
    assert.equal(micromark('    a', {extensions: [mdxMd()]}), '<p>a</p>')
  })

  await t.test('should turn off indented code (2, containers)', function () {
    assert.equal(
      micromark('    - a\n    - b', {extensions: [mdxMd()]}),
      '<ul>\n<li>a</li>\n<li>b</li>\n</ul>'
    )
  })

  await t.test('should turn off indented code (3, containers)', function () {
    assert.equal(
      micromark('    - a\n\n    - b', {extensions: [mdxMd()]}),
      '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n</ul>'
    )
  })

  await t.test('should turn off indented code (4, containers)', function () {
    assert.equal(
      micromark('    > a\n    > b', {extensions: [mdxMd()]}),
      '<blockquote>\n<p>a\nb</p>\n</blockquote>'
    )
  })

  await t.test('should turn off indented code (5, interrupt)', function () {
    assert.equal(micromark('a\n   ---', {extensions: [mdxMd()]}), '<h2>a</h2>')
  })

  await t.test('should turn off indented code (6, interrupt)', function () {
    assert.equal(micromark('a\n    ---', {extensions: [mdxMd()]}), '<h2>a</h2>')
  })
})
