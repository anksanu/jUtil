describe("Object Comparator Module :: Test Suit 1 :->", function() {


    it("Matching Objects with numbers and strings as key:value with same sequence :1", function() {
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

    it("Matching Objects with numbers and strings as key:value with same sequence :2", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true
        };
        var obj2 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });

    it("Matching Objects with numbers and strings as key:value with same sequence :3", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true,
            key6: 123.098
        };
        var obj2 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true,
            key6: 123.098
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });

    it("Matching Objects with numbers and strings as key:value with same sequence but unequal values :1", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true,
            key6: 123.098
        };
        var obj2 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true,
            key6: 123.09
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });

    it("Matching Objects with numbers and strings as key:value with jumbled sequence :1", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar'
        };
        var obj2 = {
            key4: 'bar',
            key3: 987,
            key2: 'foo',
            key1: 123
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });

    it("Matching Objects with numbers and strings as key:value with jumbled sequence :2", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key3: 987,
            key4: 'bar',
            key5: true
        };
        var obj2 = {
            key5: true,
            key4: 'bar',
            key3: 987,
            key2: 'foo',
            key1: 123
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });

    it("Matching Objects with numbers and strings as key:value with jumbled sequence :3", function() {
        var obj1 = {
            key1: 123,
            key2: 'foo',
            key4: 'bar',
            key5: true,
            key3: 987
        };
        var obj2 = {
            key5: true,
            key4: 'bar',
            key3: 987,
            key2: 'foo',
            key1: 123
        };


        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);

    });
});