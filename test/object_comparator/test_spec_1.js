describe("Object Comparator Module :: Test Suit 1 :->", function() {


    it("Matching Objects with numbers and strings as key:value with same sequence ", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar'
        };
        var obj2 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar'
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });
});