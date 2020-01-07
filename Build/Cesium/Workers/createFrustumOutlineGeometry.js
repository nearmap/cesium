/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./Transforms-9a355f42","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-27490d00","./when-c208a7cf","./GeometryAttributes-c3465b51","./Plane-c76671c4","./VertexFormat-b4c6d1c2","./FrustumGeometry-7d17045c"],function(s,e,t,p,r,m,n,f,a,i,h,g,u,_,o,c,k){"use strict";var d=0,l=1;function y(e){var t,r,n=e.frustum,a=e.orientation,i=e.origin,u=p.defaultValue(e._drawNearPlane,!0);n instanceof k.PerspectiveFrustum?(t=d,r=k.PerspectiveFrustum.packedLength):n instanceof k.OrthographicFrustum&&(t=l,r=k.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=m.Cartesian3.clone(i),this._orientation=f.Quaternion.clone(a),this._drawNearPlane=u,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+m.Cartesian3.packedLength+f.Quaternion.packedLength}y.pack=function(e,t,r){r=p.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return(t[r++]=n)===d?(k.PerspectiveFrustum.pack(a,t,r),r+=k.PerspectiveFrustum.packedLength):(k.OrthographicFrustum.pack(a,t,r),r+=k.OrthographicFrustum.packedLength),m.Cartesian3.pack(e._origin,t,r),r+=m.Cartesian3.packedLength,f.Quaternion.pack(e._orientation,t,r),t[r+=f.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var v=new k.PerspectiveFrustum,F=new k.OrthographicFrustum,w=new f.Quaternion,P=new m.Cartesian3;return y.unpack=function(e,t,r){t=p.defaultValue(t,0);var n,a=e[t++];a===d?(n=k.PerspectiveFrustum.unpack(e,t,v),t+=k.PerspectiveFrustum.packedLength):(n=k.OrthographicFrustum.unpack(e,t,F),t+=k.OrthographicFrustum.packedLength);var i=m.Cartesian3.unpack(e,t,P);t+=m.Cartesian3.packedLength;var u=f.Quaternion.unpack(e,t,w),o=1===e[t+=f.Quaternion.packedLength];if(!s.defined(r))return new y({frustum:n,origin:i,orientation:u,_drawNearPlane:o});var c=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(c),r._frustumType=a,r._origin=m.Cartesian3.clone(i,r._origin),r._orientation=f.Quaternion.clone(u,r._orientation),r._drawNearPlane=o,r},y.createGeometry=function(e){var t=e._frustumType,r=e._frustum,n=e._origin,a=e._orientation,i=e._drawNearPlane,u=new Float64Array(24);k.FrustumGeometry._computeNearFarPlanes(n,a,t,r,u);for(var o,c,s=new _.GeometryAttributes({position:new g.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})}),p=i?2:1,m=new Uint16Array(8*(1+p)),d=i?0:1;d<2;++d)c=4*d,m[o=i?8*d:0]=c,m[o+1]=c+1,m[o+2]=c+1,m[o+3]=c+2,m[o+4]=c+2,m[o+5]=c+3,m[o+6]=c+3,m[o+7]=c;for(d=0;d<2;++d)c=4*d,m[o=8*(p+d)]=c,m[o+1]=c+4,m[o+2]=c+1,m[o+3]=c+5,m[o+4]=c+2,m[o+5]=c+6,m[o+6]=c+3,m[o+7]=c+7;return new g.Geometry({attributes:s,indices:m,primitiveType:g.PrimitiveType.LINES,boundingSphere:f.BoundingSphere.fromVertices(u)})},function(e,t){return s.defined(t)&&(e=y.unpack(e,t)),y.createGeometry(e)}});
