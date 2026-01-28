"use client";

import { useEffect, useMemo, useRef } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const gradientPresets = {
  hero: {
    animate: "on",
    axesHelper: "off",
    brightness: 1,
    cAzimuthAngle: 180,
    cDistance: 2.8,
    cPolarAngle: 80,
    cameraZoom: 9.1,
    color1: "#81b29a",
    color2: "#036222ff",
    color3: "#212121",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 50,
    rotationY: 0,
    rotationZ: -60,
    shader: "defaults",
    type: "waterPlane",
    uAmplitude: 0,
    uDensity: 1.5,
    uFrequency: 0,
    uSpeed: 0.3,
    uStrength: 1.5,
    uTime: 8,
    wireframe: false,
  },
  subtle: {
    animate: "on",
    axesHelper: "off",
    brightness: 1,
    cAzimuthAngle: 180,
    cDistance: 2.6,
    cPolarAngle: 80,
    cameraZoom: 8.2,
    color1: "#1f2937",
    color2: "#334155",
    color3: "#0b1220",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 45,
    rotationY: 0,
    rotationZ: -50,
    shader: "defaults",
    type: "waterPlane",
    uAmplitude: 0,
    uDensity: 1.2,
    uFrequency: 0,
    uSpeed: 0.25,
    uStrength: 1.2,
    uTime: 8,
    wireframe: false,
  },
  static: {
    animate: "off",
    axesHelper: "off",
    brightness: 1,
    cAzimuthAngle: 180,
    cDistance: 2.8,
    cPolarAngle: 80,
    cameraZoom: 9.1,
    color1: "#606080",
    color2: "#8d7dca",
    color3: "#212121",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 50,
    rotationY: 0,
    rotationZ: -60,
    shader: "defaults",
    type: "waterPlane",
    uAmplitude: 0,
    uDensity: 1.5,
    uFrequency: 0,
    uSpeed: 0.3,
    uStrength: 1.5,
    uTime: 8,
    wireframe: false,
  },
  consulting: {
    animate: "on",
    axesHelper: "off",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 1.2,
    cAzimuthAngle: 180,
    cDistance: 3.6,
    cPolarAngle: 90,
    cameraZoom: 9.1,
    color1: "#416c57",
    color2: "#036222ff",
    color3: "#212121",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: -1.4,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 0,
    rotationY: 10,
    rotationZ: 50,
    shader: "defaults",
    type: "plane",
    uAmplitude: 1,
    uDensity: 1.3,
    uFrequency: 5.5,
    uSpeed: 0.1,
    uStrength: 4,
    uTime: 0,
    wireframe: false,
  },
  claritySessions: {
    animate: "on",
    axesHelper: "off",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 1.5,
    cAzimuthAngle: 250,
    cDistance: 1.5,
    cPolarAngle: 140,
    cameraZoom: 12.5,
    color1: "#81b29a",
    color2: "#036222ff",
    color3: "#212121",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.5,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 140,
    shader: "defaults",
    type: "sphere",
    uAmplitude: 7,
    uDensity: 0.8,
    uFrequency: 5.5,
    uSpeed: 0.3,
    uStrength: 0.4,
    uTime: 0,
    wireframe: false,
  },
  home: {
    type: "sphere",
    lightType: "env",
    animate: "on",
    uTime: 0,
    uSpeed: 0.3,
    uStrength: 0.3,
    uDensity: 0.8,
    uFrequency: 5.5,
    uAmplitude: 3.2,
    color1: "#81b29a",
    color2: "#036222ff",
    brightness: 0,
    reflection: 1,
    grain: "on",
    cAzimuthAngle: 270,
    cPolarAngle: 180,
    cDistance: 0.5,
    cameraZoom: 15.1,
    positionX: -0.1,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 130,
    rotationZ: 70,
    axesHelper: "off",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    pixelDensity: 1,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    shader: "defaults",
    wireframe: false,
  },
};

type GradientVariant = keyof typeof gradientPresets;

export function GradientBackground({
  variant = "hero",
  className = "",
  preset,
  disableScrollZoom = true,
}: {
  variant?: GradientVariant;
  className?: string;
  preset?: Partial<(typeof gradientPresets)[GradientVariant]>;
  disableScrollZoom?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const activePreset = useMemo(
    () => ({
      ...(gradientPresets[variant] || gradientPresets.hero),
      ...(preset || {}),
    }),
    [preset, variant]
  );

  useEffect(() => {
    if (!disableScrollZoom) return;

    const handler = (event: WheelEvent) => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInside) return;

      event.preventDefault();
      event.stopPropagation();

      window.scrollBy({
        left: event.deltaX,
        top: event.deltaY,
        behavior: "auto",
      });
    };

    window.addEventListener("wheel", handler, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", handler, { capture: true } as AddEventListenerOptions);
  }, [disableScrollZoom]);

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{
        backgroundColor: "bgColor1" in activePreset ? (activePreset.bgColor1 as string) : undefined,
      }}
      suppressHydrationWarning
    >
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ShaderGradient {...activePreset} />
      </ShaderGradientCanvas>
    </div>
  );
}
