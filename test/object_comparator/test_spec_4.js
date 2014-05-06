describe("Object Comparator Module ( String ) :: Test Suit 2 :->", function() {

    it("Matching strings :1", function() {
        var obj1 = 'foo foo';
        var obj2 = 'foo foo';
        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);
    });

    it("Matching strings :2", function() {
        var obj1 = 'foo fo';
        var obj2 = 'foo foo';
        expect(compare(obj1, obj2)).toBe(false);
        expect(compare(obj2, obj1)).toBe(false);
    });
});