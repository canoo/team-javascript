TrieTestCase = TestCase("TrieTestCase");

TrieTestCase.prototype.testCreate = function () {

    var trie = new Trie();

    assertFalse("should be empty", trie.contains(''));
    assertFalse("should be empty", trie.contains(undefined));
    assertFalse("should be empty", trie.contains(null));
    assertFalse("should be empty", trie.contains('a'));
    assertFalse("should be empty", trie.contains('ab'));
    assertFalse("should be empty", trie.contains('abc'));
};

TrieTestCase.prototype.testInsert = function () {

    var trie = new Trie();
    trie.insert('a');
    trie.insert('abc');
    trie.insert('abcd');
    trie.insert('abce');

    assertTrue(trie.contains('a'));
    assertFalse(trie.contains('ab'));
    assertTrue(trie.contains('abc'));
    assertTrue(trie.contains('abcd'));
    assertTrue(trie.contains('abce'));
    assertFalse(trie.contains('xyz'));
};

TrieTestCase.prototype.testInsertDuplicates = function () {

    var trie = new Trie();
    trie.insert('a');
    trie.insert('a');

    assertEquals(1, trie.children.length);
}

