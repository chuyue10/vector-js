/**
 * Unit test for the Vector class using the Jasmine framework.
 **/

describe("Vector objects", function () {

    var vec1;

    beforeEach(function () {
        vec1 = new Vector(2, 1);
    });

    /**
     * Test for vector.set(other).
     **/
    it("should be changed by setting it equal to another vector.", function () {
        var vec2 = new Vector(3, 3);
        expect(vec1.set(vec2)).toEqual(vec2);
    });

    /**
     * Test for vector.setX(x).
     **/
    it("should be changed by setting the x value.", function () {
        expect(vec1.setX(3)).toEqual(new Vector(3, 1));
    });

    /**
     * Test for vector.setY(y).
     **/
    it("should be changed by setting the y value.", function () {
        expect(vec1.setY(3)).toEqual(new Vector(2, 3));
    });

    /**
     * Test for vector.add(other).
     **/
    it("should return the correct resultant vector after addition.", function () {
        var vec2 = new Vector(4, 20);
        var resultant = new Vector(6, 21);

        // Test that the resultant vector is correct.
        expect(vec1.add(vec2)).toEqual(resultant);

        // Test that the original vectors are unchanged.
        expect(vec1).toEqual(new Vector(2, 1));
        expect(vec2).toEqual(new Vector(4, 20));
    });

    /**
     * Test for vector.add(other) with negative values.
     **/
    it("should return the correct resultant vector after addition.", function () {
        var vec2 = new Vector(4, -20);
        var resultant = new Vector(6, -19);

        // Test that the resultant vector is correct.
        expect(vec1.add(vec2)).toEqual(resultant);

        // Test that the original vectors are unchanged.
        expect(vec1).toEqual(new Vector(2, 1));
        expect(vec2).toEqual(new Vector(4, -20));
    });

    /**
     * Test for vector.subtract(other).
     **/
    it("should return the correct resultant vector after subtraction.", function () {
        var vec2 = new Vector(4, 20);
        var resultant = new Vector(-2, -19);

        // Test that the resultant vector is correct.
        expect(vec1.subtract(vec2)).toEqual(resultant);

        // Test that the original vectors are unchanged.
        expect(vec1).toEqual(new Vector(2, 1));
        expect(vec2).toEqual(new Vector(4, 20));
    });

    /**
     * Test for vector.dot(other).
     **/
    it("should return the correct value from a dot product.", function () {
        var vec2 = new Vector(4, 5);
        expect(vec1.dot(vec2)).toBe(13);
    });

    /**
     * Test for vector.scalarMultiply(scalar).
     **/
    it("should return the correct value from a scalar multiply.", function () {
        expect(vec1.scalarMultiply(5)).toEqual(new Vector(10, 5));
    });

    /**
     * Test for vector.scalarDivide(scalar).
     **/
    it("should return the correct value from a scalar divide.", function () {
        expect(vec1.scalarDivide(3)).toEqual(new Vector(2 / 3, 1 / 3));
    });

    /**
     * Test for vector.negate().
     **/
    it("should return the correct value from a negate.", function () {
        expect(vec1.negate()).toEqual(new Vector(-2, -1));
    });

    /**
     * Test for vector.magnitude().
     **/
    it("should return the correct magnitude.", function () {
        var niceVector = new Vector(3, 4);
        expect(niceVector.magnitude()).toBe(5);
    });

    /**
     * Test for vector.magnitudeSquared().
     **/
    it("should return the correct magnitude squared.", function () {
        var niceVector = new Vector(3, 4);
        expect(niceVector.magnitudeSquared()).toBe(25);
    });

    /**
     * Test for vector.direction().
     **/
    it("should return the correct angle from the x-axis.", function () {
        var firstQuadrant = new Vector(1, 1);
        var secondQuadrant = new Vector(-1, 1);
        var thirdQuadrant = new Vector(-1, -1);
        var fourthQuadrant = new Vector(1, -1);

        expect(firstQuadrant.direction()).toBe(Math.PI / 4);
        expect(secondQuadrant.direction()).toBe(3 * Math.PI / 4);
        expect(thirdQuadrant.direction()).toBe(-3 * Math.PI / 4);
        expect(fourthQuadrant.direction()).toBe(-Math.PI / 4);
    });

    /**
     * Test for vector.normalize().
     **/
    it("should return the normalized vector.", function () {
        expect(vec1.normalize())
            .toEqual(new Vector(2 / Math.sqrt(5), 1 / Math.sqrt(5)));
    });

    /**
     * Test for vector.rotate().
     **/
    it("should rotate around the origin correctly.", function () {});
});

// ============================================================================
// IDENTYTY TESTS
// ============================================================================
describe("Vectors should obey these algebraic identities.", function () {

    /**
     * c * (A + B) = c * A + c * B
     **/
    it("Obey the distributive property of scalar multiplication.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var c = 42;
        var left = a.add(b).scalarMultiply(c);
        var right = a.scalarMultiply(c).add(b.scalarMultiply(c));
        expect(left).toEqual(right);
    });

    /**
     * A + B = B + A
     **/
    it("Obey the commutative property of vector addition.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var left = a.add(b);
        var right = b.add(a);
        expect(left).toEqual(right);
    });

    /**
     * A + (B + C) = (A + B) + C
     **/
    it("Obey the associative property of vector addition.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var c = new Vector(-34, 4);
        var left = a.add(b.add(c));
        var right = (a.add(b)).add(c);
        expect(left).toEqual(right);
    });

    /**
     * (A dot B) = (B dot A)
     **/
    it("Obey the commutative property of vector dot product.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var left = a.dot(b);
        var right = b.dot(a);
        expect(left).toEqual(right);
    });

    /**
     * ((A + B) dot C) = (A dot C) + (B dot C)
     **/
    it("Obey the distributive property of vector dot product.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var c = new Vector(-34, 4);
        var left = (a.add(b)).dot(c);
        var right = a.dot(c) + b.dot(c);
        expect(left).toEqual(right);
    });

    /**
     * |A|^2 = (A dot A)
     **/
    it("Magnitude from vector dot product.", function () {
        var a = new Vector(-34, 4);
        var left = a.magnitudeSquared();
        var right = a.dot(a);
        expect(left).toEqual(right);
    });
    /**
     * |A + B| <= |A| + |B|
     **/
    it("Obey the triangle inequality.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var left = (a.add(b)).magnitude();
        var right = a.magnitude() + b.magnitude();
        expect(left <= right).toBeTruthy();
    });

    /**
     * |A - B| >= |A| - |B|
     **/
    it("Obey the reverse triangle inequality.", function () {
        var a = new Vector(-5, 69);
        var b = new Vector(76, 41);
        var left = a.subtract(b).magnitude();
        var right = a.magnitude() - b.magnitude();
        expect(left >= right).toBeTruthy();
    });
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================