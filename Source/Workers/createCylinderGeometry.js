/* This file is automatically rebuilt by the Cesium build process. */
define(['./defined-d7f5f932', './Check-bbcbb0e2', './freezeObject-abed2cf1', './defaultValue-23842ffb', './Math-c7c79b58', './Cartesian2-9554c007', './defineProperties-1cf3ebff', './Transforms-149a4caf', './RuntimeError-956ace02', './WebGLConstants-157bb1d6', './ComponentDatatype-930d1a06', './GeometryAttribute-f0013aa2', './when-88f4c09c', './GeometryAttributes-6520aeb6', './IndexDatatype-f99b6826', './GeometryOffsetAttribute-35891b0e', './VertexFormat-6e3da02a', './CylinderGeometryLibrary-392aa6b0', './CylinderGeometry-867c8228'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, CylinderGeometryLibrary, CylinderGeometry) { 'use strict';

    function createCylinderGeometry(cylinderGeometry, offset) {
            if (defined.defined(offset)) {
                cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
            }
            return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
        }

    return createCylinderGeometry;

});
