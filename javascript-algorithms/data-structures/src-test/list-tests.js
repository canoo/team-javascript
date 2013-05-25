ListTestCase = TestCase("ListTestCase");

ListTestCase.prototype.assertInsert = function (list) {

    assertEquals(0, list.size());
    assertFalse(list.contains('a'));
    assertFalse(list.contains('b'));
    assertFalse(list.contains('c'));
    assertFalse(list.contains('d'));

    list.insert('a');
    assertEquals(1, list.size());
    assertTrue(list.contains('a'));
    assertFalse(list.contains('b'));
    assertFalse(list.contains('c'));
    assertFalse(list.contains('d'));

    list.insert('b');
    assertEquals(2, list.size());
    assertTrue(list.contains('a'));
    assertTrue(list.contains('b'));
    assertFalse(list.contains('c'));
    assertFalse(list.contains('d'));

    list.insert('c');
    assertEquals(3, list.size());
    assertTrue(list.contains('a'));
    assertTrue(list.contains('b'));
    assertTrue(list.contains('c'));
    assertFalse(list.contains('d'));

    list.insert('d');
    assertEquals(4, list.size());
    assertTrue(list.contains('a'));
    assertTrue(list.contains('b'));
    assertTrue(list.contains('c'));
    assertTrue(list.contains('d'));
};

ListTestCase.prototype.assertDelete= function (list) {
    assertEquals(0, list.size());

    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insert('d');

    assertEquals(4, list.size());
    assertFalse(list.contains('z'));
    list.remove('z');
    assertEquals(4, list.size());
    assertFalse(list.contains('z'));

    list.remove('b');
    assertEquals(3, list.size());
    assertTrue(list.contains('a'));
    assertFalse(list.contains('b'));
    assertTrue(list.contains('c'));
    assertTrue(list.contains('d'));

    list.remove('a');
    assertEquals(2, list.size());
    assertFalse(list.contains('a'));
    assertFalse(list.contains('b'));
    assertTrue(list.contains('c'));
    assertTrue(list.contains('d'));

    list.remove('d');
    assertEquals(1, list.size());
    assertFalse(list.contains('a'));
    assertFalse(list.contains('b'));
    assertTrue(list.contains('c'));
    assertFalse(list.contains('d'));

    list.remove('c');
    assertEquals(0, list.size());
    assertFalse(list.contains('a'));
    assertFalse(list.contains('b'));
    assertFalse(list.contains('c'));
    assertFalse(list.contains('d'));
};

ListTestCase.prototype.assertDuplicates = function (list) {
    assertEquals(0, list.size());

    list.insert('a');
    list.insert('a');
    list.insert('a');

    assertEquals(3, list.size());
    assertTrue(list.contains('a'));

    list.remove('a');
    assertEquals(2, list.size());
    assertTrue(list.contains('a'));

    list.remove('a');
    assertEquals(1, list.size());
    assertTrue(list.contains('a'));

    list.remove('a');
    assertEquals(0, list.size());
    assertFalse(list.contains('a'));
};

ListTestCase.prototype.testUnsortedLinkedList = function () {

    this.assertInsert(new UnsortedLinkedList());
    this.assertDelete(new UnsortedLinkedList());
    this.assertDuplicates(new UnsortedLinkedList());

    var list = new UnsortedLinkedList();
    UnsortedLinkedList.prototype.dump = function() {
        if (this.value === undefined) {
            return "";
        }
        return this.value + "," + this.rest.dump();
    };

    list.insert('a');
    list.insert('z');
    list.insert('b');
    list.insert('y');
    assertEquals("y,b,z,a,", list.dump()); // prove unsorted
};

ListTestCase.prototype.testUnsortedDoubleLinkedList = function () {

    this.assertInsert(new UnsortedDoubleLinkedList());
    this.assertDelete(new UnsortedDoubleLinkedList());
    this.assertDuplicates(new UnsortedDoubleLinkedList());

    var list = new UnsortedDoubleLinkedList();
    UnsortedDoubleLinkedList.prototype.dump = function() {
        if (this.value === undefined) {
            return "";
        }
        return this.value + "," + this.next.dump();
    };

    list.insert('a');
    list.insert('z');
    list.insert('b');
    list.insert('y');
    assertEquals("y,b,z,a,", list.dump()); // prove unsorted
};