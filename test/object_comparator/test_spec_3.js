describe("Object Comparator Module ( Numbers ) :: Test Suit 2 :->", function() {

    it("Matching numbers :1", function() {
        var obj1 = 12;
        var obj2 = 12;
        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);
    });

    it("Matching numbers :2", function() {
        var obj1 = 12.4;
        var obj2 = 12.6;
        expect(compare(obj1, obj2)).toBe(true);
        expect(compare(obj2, obj1)).toBe(true);
    });

    it("Matching numbers :3", function() {
        var obj1 = 12;
        var obj2 = 1;
        expect(compare(obj1, obj2)).toBe(false);
        expect(compare(obj2, obj1)).toBe(false);
    });

    it("Matching numbers :4", function() {
        var obj1 = 12.1;
        var obj2 = 12;
        expect(compare(obj1, obj2)).toBe(false);
        expect(compare(obj2, obj1)).toBe(false);
    });

    it("Matching numbers :5", function() {
        var obj1 = 12.12;
        var obj2 = 12.1;
        expect(compare(obj1, obj2)).toBe(false);
        expect(compare(obj2, obj1)).toBe(false);
    });

});