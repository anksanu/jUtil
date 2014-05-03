describe("Object Comparator Module :: Test Suit 2 :->", function() {

    it("Matching Objects with numbers and strings as key:value with same sequence having functions, arrays nd objects :1", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: function() {
                console.log('a');
            },
            key4: ['a', 123, true, [], {}],
            key5: {}
        };
        var obj2 = {
            key1: 123,
            key2: 'foo',
            key3: function() {
                console.log('a');
            },
            key4: ['a', 123, true, [], {}],
            key5: {}
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });
});