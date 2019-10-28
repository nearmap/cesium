attribute vec3 position3DHigh;
attribute vec3 position3DLow;
attribute vec3 prevPosition3DHigh;
attribute vec3 prevPosition3DLow;
attribute vec3 nextPosition3DHigh;
attribute vec3 nextPosition3DLow;
attribute vec2 expandAndWidth;
attribute vec2 st;
attribute float batchId;

varying float v_width;
varying vec2 v_st;
varying float v_polylineAngle;

void main()
{
    float expandDir = expandAndWidth.x;
    float width = abs(expandAndWidth.y) + 0.5;
    bool usePrev = expandAndWidth.y < 0.0;

    vec4 p = czm_computePosition();
    vec4 prev = czm_computePrevPosition();
    vec4 next = czm_computeNextPosition();

    v_width = width;
    v_st = st;

    float depth;

    vec4 positionWC = getPolylineWindowCoordinates(p, prev, next, expandDir, width, usePrev, v_polylineAngle, depth);
    vec4 positionClip = czm_viewportOrthographic * positionWC;
    positionClip.z = -1.0;
    positionClip *= depth;
    gl_Position = positionClip;

#ifdef LOG_DEPTH
    // czm_vertexLogDepth(czm_modelViewProjectionRelativeToEye * p);
    czm_vertexLogDepth();
#endif
}
