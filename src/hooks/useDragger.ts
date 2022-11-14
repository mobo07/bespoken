import { useEffect, useRef } from "react";

const useDragger = (targetId: string, containerId: string, customImg: string, color: string, img: string | null | undefined) => {
    const dragging = useRef<boolean>(false);
    const coords = useRef<{
      startX: number;
      startY: number;
      lastX: number;
      lastY: number;
    }>({
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0,
    });
  
    useEffect(() => {
        const target = document.getElementById(targetId);
        const container = document.getElementById(containerId);
        
        
        if(!target) return;
        if(!container) throw new Error("container with the given id doesn't exist!");
        
        let img = document.querySelector(customImg) as HTMLDivElement;
        // if(!img) return;
        img.appendChild(target);
        
      const onPointerDown = (e: PointerEvent) => {
        dragging.current = true;
        target.style.cursor = "grabbing";
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;

        // let img = document.querySelector(customImg) as HTMLDivElement;
        // if(!img) return;
        // img.appendChild(target);
      };
  
      const onPointerUp = () => {
        dragging.current = false;
        coords.current.lastX = target.offsetLeft;
        coords.current.lastY = target.offsetTop;
        target.style.cursor = "grab";
      };
  
      const onPointerMove = (e: PointerEvent) => {
        if (!dragging.current) return;
  
        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;
  
        target.style.left = `${nextX}px`;
        target.style.top = `${nextY}px`;
      };
  
      target?.addEventListener("pointerdown", onPointerDown);
      target.addEventListener("pointerup", onPointerUp);
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerleave", onPointerUp);
  
      const cleanup = () => {
        target.removeEventListener("pointerdown", onPointerDown);
        target.removeEventListener("pointerup", onPointerUp);
        container.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerleave", onPointerUp);
      };
  
      return cleanup;
    }, [color, targetId, containerId, customImg, img]);
}

export default useDragger;