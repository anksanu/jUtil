describe("Object Comparator Module ( Misc ) :: Test Suit 2 :->", function() {

    it("Matching undefined :1", function() {
        var obj1 = void 0;
        var abc = {}
        var obj2 = abc.foo;
        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);
    });

    it("Matching null :1", function() {
        var obj1 = null;
        var obj2 = null;
        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);
    });

    it("Matching undefine with null :1", function() {
        var obj1 = null;
        var obj2 = void 0;
        expect(compare(obj1, obj2)).toBe(false);
        expect(compare(obj2, obj1)).toBe(false);
    });

});