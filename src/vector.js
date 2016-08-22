/**
 * A 2D vector class.
 **/

/**
 * Constructor.
 **/
function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype = {

    /**
     * Set the x and y values of this vector to the x and y values of the other
     * vector.
     */
    set: function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    },

    /**
     * Set the x value of this vector to the new value.
     **/
    setX: function (x) {
        this.x = x;
        return this;
    },

    /**
     * Set the y value of this vector to the new value.
     **/
    setY: function (y) {
        this.y = y;
        return this;
    },

    /**
     * Returns the resultant vector of the addition of this vector and the other
     * vector.
     **/
    add: function (other) {
        return new Vector(
            this.x + other.x,
            this.y + other.y
        );
    },

    /**
     * Returns the resultant vector of the subtraction of this vector and the
     * other vector.
     **/
    subtract: function (other) {
        return new Vector(
            this.x - other.x,
            this.y - other.y
        );
    },

    /**
     * Returns the resultant vector of the dot product of this vector and the
     * other vector.
     **/
    dot: function (other) {
        return this.x * other.x + this.y * other.y;
    },

    /**
     * Returns the resultant vector of this vector multiplied by a scalar.
     **/
    scalarMultiply: function (scalar) {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        );
    },

    /**
     * Returns the resultant vector of this vector divided by a scalar.
     **/
    scalarDivide: function (scalar) {
        return new Vector(
            this.x / scalar,
            this.y / scalar
        );
    },

    /**
     * Returns the negation of this vector.
     **/
    negate: function () {
        return this.scalarMultiply(-1);
    },

    /**
     * Returns the magnitude of this vector.
     **/
    magnitude: function () {
        return Math.sqrt(this.magnitudeSquared());
    },

    /**
     * Returns the magnitude of this vector squared.
     **/
    magnitudeSquared: function () {
        return this.x * this.x + this.y * this.y;
    },


    /**
     * Returns the direction in radians of this vector.
     **/
    direction: function () {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Returns the normalized vector of this vector.
     **/
    normalize: function () {
        return this.scalarDivide(this.magnitude());
    },

    /**
     * Return a rotated vector by the given angle in radians.
     **/
    rotate: function (angle) {
        return new Vector(
            this.x * Math.cos(angle) - this.y * Math.sin(angle),
            this.x * Math.sin(angle) + this.y * Math.cos(angle)
        );
    }
};

Vector.fromPolar = function (magnitude, direction) {
    return Vector.unitVector(direction).scalarMultiply(magnitude);
}

Vector.unitVector = function (angle) {
    return new Vector(Math.cos(angle), Math.sin(angle));
}