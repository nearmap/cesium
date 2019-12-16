/* This file is automatically rebuilt by the Cesium build process. */
define(['./defined-d7f5f932', './Check-bbcbb0e2', './freezeObject-abed2cf1', './defaultValue-23842ffb', './Math-c7c79b58', './Cartesian2-9554c007', './defineProperties-1cf3ebff', './Transforms-149a4caf', './RuntimeError-956ace02', './WebGLConstants-157bb1d6', './ComponentDatatype-930d1a06', './GeometryAttribute-f0013aa2', './when-88f4c09c', './GeometryAttributes-6520aeb6', './IndexDatatype-f99b6826', './GeometryOffsetAttribute-35891b0e', './EllipseGeometryLibrary-a4453565', './EllipseOutlineGeometry-18a84974'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, EllipseGeometryLibrary, EllipseOutlineGeometry) { 'use strict';

    function createEllipseOutlineGeometry(ellipseGeometry, offset) {
            if (defined.defined(offset)) {
                ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset);
            }
            ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
            ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
            return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry);
        }

    return createEllipseOutlineGeometry;

});
