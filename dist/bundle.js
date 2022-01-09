(()=>{"use strict";var e,t=function(e,t,n){var r=n.x,o=n.y;return{x:(e.x-e.y)*r/2+t.x,y:(e.x+e.y)*o/2+t.y}};!function(e){e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Right=4]="Right"}(e||(e={}));var n=function(t,n,r){switch(r){case e.Up:return{x:t-1,y:n-1};case e.Down:return{x:t+1,y:n+1};case e.Left:return{x:t-1,y:n+1};case e.Right:return{x:t+1,y:n-1};default:throw new Error("Not a valid direction")}},r=function(e){return e>=0&&e<80?0:e>=80&&e<100?1:e>=100&&e<200?2:e>=200&&e<256?3:4},o={x:32,y:32},a=function(e){o.x=i(5,58,e.x),o.y=i(5,58,e.y)};window.addEventListener("keydown",(function(t){if(!t.defaultPrevented){var r;switch(t.code){case"KeyS":case"ArrowDown":r=n(o.x,o.y,e.Down),a(r);break;case"KeyW":case"ArrowUp":r=n(o.x,o.y,e.Up),a(r);break;case"KeyA":case"ArrowLeft":r=n(o.x,o.y,e.Left),a(r);break;case"KeyD":case"ArrowRight":r=n(o.x,o.y,e.Right),a(r)}y(),t.preventDefault()}}),!0);var c=function(e){console.log("e.x: ",e.clientX,"e.y: ",e.clientY),console.log("e: ",e);var n=t({x:0,y:0},{x:0,y:0},{x:1,y:1}),r=t({x:0,y:1},{x:0,y:0},{x:1,y:1}),o=t({x:1,y:1},{x:0,y:0},{x:1,y:1}),a=t({x:1,y:0},{x:0,y:0},{x:1,y:1});console.log(n,r,o,a)},y=function(){var e=document.getElementById("grass"),t=document.getElementById("water"),n=document.getElementById("sand"),a=document.getElementById("snow"),c=[t,n,e,a,a],y=function(e,t){for(var n=[],o=0;o<64;o++){for(var a=[],c=0;c<64;c++){var y=noise.simplex2(o/100,c/100);y=256*Math.abs(y),a.push(r(y))}n.push(a)}return n}(),s=o.x,d=o.y,u=i(0,y.length-1,s-5),x=i(0,y.length-1,s+5),l=i(0,y[0].length-1,d-5),f=i(0,y[0].length-1,d+5),g=document.getElementById("canvas"),v=g.getContext("2d");v.clearRect(0,0,g.width,g.height);for(var w=0,h=u;h<=x;h++){for(var m=0,E=l;E<=f;E++){var p=c[y[h][E]],L=50*w,D=50*m,I=L-D,B=(L+D)/2;v.drawImage(p,I+800,B+0),m++}w++}},i=function(e,t,n){return n<e?e:n>t?t:n};window.addEventListener("load",(function(){!function(){document.getElementById("canvas").addEventListener("click",c);var e=Math.random();noise.seed(e),y()}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0x0QixFQUFJVyxFQUFRWCxHQUFLYSxFQUFNYixJQUFLLENBRW5DLElBREEsSUFBSXVCLEVBQVUsRUFDTHJCLEVBQUlZLEVBQVFaLEdBQUthLEVBQU1iLElBQUssQ0FDbkMsSUFDTXNCLEVBQVE1QixFQUREQyxFQUFZRyxHQUFHRSxJQU14QnVCLEVBQWtCLEdBQVZILEVBQ1JJLEVBQWtCLEdBQVZILEVBQ1JJLEVBQU9GLEVBQVFDLEVBQ2ZFLEdBQVFILEVBQVFDLEdBQVMsRUFFN0JULEVBQUlZLFVBQVVMLEVBQU9HLEVBUFAsSUFPdUJDLEVBTnZCLEdBT2RMLElBRUZELE1BSUVsRCxFQUFRLFNBQUMwRCxFQUFhQyxFQUFhakUsR0FDdkMsT0FBSUEsRUFBUWdFLEVBQWNBLEVBQ3RCaEUsRUFBUWlFLEVBQWNBLEVBQ25CakUsR0FhVE8sT0FBT0MsaUJBQWlCLFFBQVEsWUFUZCxXQWpGRGlCLFNBQVNDLGVBQWUsVUFDaENsQixpQkFBaUIsUUFBU00sR0FtRmpDLElBQU1vRCxFQUFPM0IsS0FBSzRCLFNBQ2xCOUIsTUFBTTZCLEtBQUtBLEdBQ1h0RCxJQUtBd0QsTyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2lzdGljczIvLi9zcmMvbWF0aC50cyIsIndlYnBhY2s6Ly9sb2dpc3RpY3MyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFBvaW50ID0ge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgUG9sYXJQb2ludCA9IHtcbiAgICBhbmdsZTogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyXG59XG5cbmNvbnN0IHRpbGVXaWR0aCA9IDUwO1xuLy8gY29uc3QgZ2V0VGlsZVdpZHRoID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiB0aWxlV2lkdGhcbi8vIH1cblxuY29uc3QgdGlsZUhlaWdodCA9IDI1OyBcbi8vIGNvbnN0IGdldFRpbGVIZWlnaHQgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHRpbGVIZWlnaHRcbi8vIH1cbi8qXG5TeCA8LSB4ICogdHcvMiAtIHkgKiB0dy8yIFxuU3kgPC0geCAqIHRoLzIgKyB5ICogdGgvMlxuXG5TeCA8LSAoeCAtIHkpICogdHcvMlxuU3kgPC0gKHggKyB5KSAqIHRoLzJcblxuYnkgPSBzeS90aCAtIHN4L3R3XG5ieCA9ICh0aCpzeCArIHN5IHJ3KS8odGggdHcpXG5cbnNjcmVlbiBzcGFjZTogMTYwMCAvIDkwMDsgLy8gY2FudmFzIHNpemVcbmNhbWVyYSBzcGFjZTogNTEyIC80ODA7IC8vIHdpbmRvdyBpbnRvIGlzbyBncmlkIHNwYWNlXG53b3JsZCBzcGFjZTogNjQgeCA2NCAvLyBib2FyZCBzaXplIFxuXG5odHRwczovL3lvdXR1LmJlL3Vra2JOS1RnZjVVP3Q9MTYxXG5cblxuKi9cbmV4cG9ydCBjb25zdCBib2FyZFNwYWNlVG9TY3JlZW5TcGFjZSA9IChib2FyZDogUG9pbnQsIHNjcm9sbFBvc2l0aW9uOiBQb2ludCwgc2NhbGU6IFBvaW50KTogUG9pbnQgPT4ge1xuICAgIGNvbnN0IHRpbGVXaWR0aCA9IHNjYWxlLng7XG4gICAgY29uc3QgdGlsZUhlaWdodCA9IHNjYWxlLnk7XG4gICAgY29uc3Qgc2NyZWVuWCA9ICgoYm9hcmQueCAtIGJvYXJkLnkpICogdGlsZVdpZHRoIC8gMikgKyBzY3JvbGxQb3NpdGlvbi54O1xuICAgIGNvbnN0IHNjcmVlblkgPSAoKGJvYXJkLnggKyBib2FyZC55KSAqIHRpbGVIZWlnaHQgLyAyKSArIHNjcm9sbFBvc2l0aW9uLnk7XG4gICAgcmV0dXJuIHt4OiBzY3JlZW5YLCB5OiBzY3JlZW5ZfVxufVxuXG5leHBvcnQgY29uc3Qgc2NyZWVuU3BhY2VUb0JvYXJkU3BhY2UgPSAoc2NyZWVuOiBQb2ludCwgc2Nyb2xsUG9zaXRpb246IFBvaW50LCBzY2FsZTogUG9pbnQpOiBQb2ludCA9PiB7XG4gICAgY29uc3QgdGlsZVdpZHRoID0gc2NhbGUueDtcbiAgICBjb25zdCB0aWxlSGVpZ2h0ID0gc2NhbGUueTtcbiAgICBjb25zdCBib2FyZFggPSAoKHRpbGVIZWlnaHQgKiBzY3JlZW4ueCArIHNjcmVlbi55ICogdGlsZVdpZHRoKS8odGlsZUhlaWdodCAqIHRpbGVXaWR0aCkpIC0gc2Nyb2xsUG9zaXRpb24ueDtcbiAgICBjb25zdCBib2FyZFkgPSAoc2NyZWVuLnkvdGlsZUhlaWdodCAtIHNjcmVlbi54L3RpbGVXaWR0aCkgLSBzY3JvbGxQb3NpdGlvbi55O1xuICAgIHJldHVybiB7eDogYm9hcmRYLCB5OiBib2FyZFl9XG59XG5cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhOiBQb2ludCwgYjogUG9pbnQpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgoYS54IC0gYi54KSooYS54IC0gYi54KSkgKyAoKGEueSAtIGIueSkqKGEueSAtIGIueSkpKVxuICAgIHJldHVybiBkaXN0YW5jZVxufVxuXG5leHBvcnQgY29uc3QgZGVncmVlczJyYWRpYW5zID0gKGRlZ3JlZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gKGRlZ3JlZSAqIE1hdGguUEkvMTgwKVxufVxuXG5leHBvcnQgY29uc3QgcmFkaWFuczJkZWdyZWVzID0gKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciA9PiB7XG4gcmV0dXJuIChyYWRpYW5zICogMTgwL01hdGguUEkpXG59XG4vLyAgKGRpc3RhbmNlOiAxMywgYW5nbGU6IDIyLjbCsCkgXG4vKlxueCA9IHIgw5cgY29zKCDOuCApXG55ID0gciDDlyBzaW4oIM64IClcblxuKi9cbmV4cG9ydCBjb25zdCBwb2xhcjJjYXJ0ZXNpYW4gPSAocG9pbnQ6IFBvbGFyUG9pbnQpOiBQb2ludCA9PiB7XG4gICAgY29uc3QgeCA9IHBvaW50LnJhZGl1cyAqIE1hdGguY29zKHBvaW50LmFuZ2xlKTtcbiAgICBjb25zdCB5ID0gcG9pbnQucmFkaXVzICogTWF0aC5zaW4ocG9pbnQuYW5nbGUpO1xuICAgIHJldHVybiB7eCwgeX1cbn1cbi8qXG5yID0g4oiaICggeDIgKyB5MiApXG7OuCA9IHRhbi0xICggeSAvIHggKVxuKi9cbmV4cG9ydCBjb25zdCBjYXJ0ZXNpYW4ycG9sYXIgPSAoY2FydGVzaWFuOiBQb2ludCk6IFBvbGFyUG9pbnQgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguc3FydCgoY2FydGVzaWFuLngqKjIpICsgKGNhcnRlc2lhbi55KioyKSlcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbihjYXJ0ZXNpYW4ueS9jYXJ0ZXNpYW4ueCk7XG4gICAgcmV0dXJuIHthbmdsZSwgcmFkaXVzfVxufSIsImRlY2xhcmUgdmFyIG5vaXNlOiBhbnlcbmltcG9ydCB7IGJvYXJkU3BhY2VUb1NjcmVlblNwYWNlLCBQb2ludCB9IGZyb20gJy4vbWF0aCdcblxuLypcbiAtIFRPRE86IFxuICAtIGRyYXcgY3VycmVudGx5IHNlbGVjdGVkIHRpbGVcbiAgLSB0aWxlIGNsaWNrIC0gd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNhbnZhcyB3ZSBuZWVkIHRvIGtub3cgd2hhdCB0aWxlIHdhcyBjbGlja2VkIGFuZCBpdCBuZWVkcyB0byBiZVxuICBoaWdobGl0ZWQuIFxuIC0gaW5jcmVhc2UgdGhlIG1hcCBzaXplIHRvIDUxMlxuIC0gY2hhbmdlIHRoZSB4IGFuZCB5IG9mZnNldHMgc28gdGhhdCB0aGUgYWN0dWFsIHN0YXJ0aW5nIHBvaW50cyBvZiB0aGUgbWFwIGFyZSBvdXRzaWRlIG9mIHRoZSBzY3JlZW4gXG4gLSByYW5kb21seSBzcGF3biBmYWN0b3JpZXMsIHByb2R1Y2VyL2NvbnN1bWVycywgbWFrZSB0aWxlcyBmcm9tIHRoZSBidWlsZGluZ3NcbiAtIHJhbmRvbmx5IHNwYXduIHRyZWVzXG4gLSB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgMCwxLDIsMyB0byB0aWxlIG5hbWVzIFxuXG4gKi9cblxuXG4vKlxuRXhhbXBsZTpcbnNQb3MgLSAxLDEgXG5MZWZ0IC0gMCwyXG5SaWdodCAtIDIsMFxuVXAgLSAwLDBcbkRvd24sIDIsMlxuXG5sZWZ0ID0gKHNQb3NYIC0gMSwgc1Bvc1kgKyAxKVxucmlnaHQgPSAoc1Bvc1ggKyAxLCBzUG9zWSAtMSlcbnVwID0gKHNQb3NYIC0xICwgc1Bvc1kgLTEpXG5kb3duID0gKHNQb3NYICsgMSAsIHNQb3NZICsxKVxuKi9cbmVudW0gRGlyZWN0aW9uIHtcbiAgVXAgPSAxLFxuICBEb3duID0gMixcbiAgTGVmdCA9IDMsXG4gIFJpZ2h0ID0gNCxcbn1cblxuLy8gV2hlbiB0aGUgdXNlciB1c2VzIHRoZSBrZXlib2FyZCB0byBuYXZpZ2F0ZSwgdGhleSBhcmUgbmF2aWdhdGluZyBpbiBzY3JlZW4gXG4vLyBzcGFjZSwgaG93ZXZlciB0aGUgcmVuZGVyIGNvZGUgcmVxdWlyZXMgYSBsb2NhdGlvbiBpbiBib2FyZCBzcGFjZS4gXG4vLyBUaGlzIGZ1bmN0aW9uIG1hcHMsIGdpdmVuIGFuIGlucHV0IGNvb3JkLCB0aGUgbmV3IGNvb3JkIG9mIHRoZSBwbGF5ZXIgXG4vLyBhZnRlciB0aGV5IHByZXNzIGEga2V5IGJ5IGNoYW5naW5nIHRoZSBjb29yZHMgaW50byA0NWRlZyByb3RhdGVkIG5ldyBcbi8vIGNvLW9yZGluYXRlIHNwYWNlLiBcbmNvbnN0IG1hcENvb3JkcyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBQb2ludCA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBEaXJlY3Rpb24uVXA6XG4gICAgICByZXR1cm4geyB4OiB4IC0gMSwgeTogeSAtIDEgfSBhcyBQb2ludFxuICAgIGNhc2UgRGlyZWN0aW9uLkRvd246XG4gICAgICByZXR1cm4geyB4OiB4ICsgMSwgeTogeSArIDEgfSBhcyBQb2ludFxuICAgIGNhc2UgRGlyZWN0aW9uLkxlZnQ6XG4gICAgICByZXR1cm4geyB4OiB4IC0gMSwgeTogeSArIDEgfSBhcyBQb2ludFxuICAgIGNhc2UgRGlyZWN0aW9uLlJpZ2h0OlxuICAgICAgcmV0dXJuIHsgeDogeCArIDEsIHk6IHkgLSAxIH0gYXMgUG9pbnRcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdmFsaWQgZGlyZWN0aW9uXCIpXG4gIH1cbn1cbi8vIGNvbnNvbGUubG9nKG1hcENvb3JkcygxLDEsRGlyZWN0aW9uLlVwKSk7XG5cbmNvbnN0IHBlcmxpbk1hcCA9IGZ1bmN0aW9uICh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHZhbHVlID49IDAgJiYgdmFsdWUgPCA4MCkge1xuICAgIHJldHVybiAwIC8vIHdhdGVyXG4gIH1cbiAgaWYgKHZhbHVlID49IDgwICYmIHZhbHVlIDwgMTAwKSB7XG4gICAgcmV0dXJuIDEgLy8gY29hc3RcbiAgfVxuICBpZiAodmFsdWUgPj0gMTAwICYmIHZhbHVlIDwgMjAwKSB7XG4gICAgcmV0dXJuIDIgLy8gZ3Jhc3NcbiAgfVxuICBpZiAodmFsdWUgPj0gMjAwICYmIHZhbHVlIDwgMjU2KSB7XG4gICAgcmV0dXJuIDMgLy8gc25vd1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiA0IC8vIGVycm9yXG4gIH1cbn1cblxuY29uc3QgQk9BUkRIRUlHSFQgPSA2NDtcbmNvbnN0IEJPQVJEV0lEVEggPSA2NDtcbmNvbnN0IHBsYXllciA9IHsgeDogQk9BUkRXSURUSCAvIDIsIHk6IEJPQVJESEVJR0hUIC8gMiB9XG5cbmNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKHBvaW50OiBQb2ludCkgPT4ge1xuICBwbGF5ZXIueCA9IGNsYW1wKDUsIEJPQVJEV0lEVEggLSA1IC0gMSwgcG9pbnQueCk7XG4gIHBsYXllci55ID0gY2xhbXAoNSwgQk9BUkRIRUlHSFQgLSA1IC0gMSwgcG9pbnQueSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICByZXR1cm47IC8vIERvIG5vdGhpbmcgaWYgZXZlbnQgYWxyZWFkeSBoYW5kbGVkXG4gIH1cbiAgbGV0IHBvaW50O1xuICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICBjYXNlIFwiS2V5U1wiOlxuICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgIHBvaW50ID0gbWFwQ29vcmRzKHBsYXllci54LCBwbGF5ZXIueSwgRGlyZWN0aW9uLkRvd24pO1xuICAgICAgdXBkYXRlUG9zaXRpb24ocG9pbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIktleVdcIjpcbiAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgcG9pbnQgPSBtYXBDb29yZHMocGxheWVyLngsIHBsYXllci55LCBEaXJlY3Rpb24uVXApO1xuICAgICAgdXBkYXRlUG9zaXRpb24ocG9pbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIktleUFcIjpcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBwb2ludCA9IG1hcENvb3JkcyhwbGF5ZXIueCwgcGxheWVyLnksIERpcmVjdGlvbi5MZWZ0KTtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKHBvaW50KVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIktleURcIjpcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgcG9pbnQgPSBtYXBDb29yZHMocGxheWVyLngsIHBsYXllci55LCBEaXJlY3Rpb24uUmlnaHQpO1xuICAgICAgdXBkYXRlUG9zaXRpb24ocG9pbnQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZW5kZXIoKTtcblxuICAvLyBDb25zdW1lIHRoZSBldmVudCBzbyBpdCBkb2Vzbid0IGdldCBoYW5kbGVkIHR3aWNlXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59LCB0cnVlKTtcblxuXG5cbi8vIGNvbnN0IGtleWRvd24gPSAoYm9keTogSFRNTEJvZHlFbGVtZW50LCBldmVudDogRXZlbnQgKSA9PiB7XG5cbi8vICAgLy8gZXZlbnQua2V5Y29kZVxuLy8gICAvLyBXQVNEXG4vLyB9XG4vLyB2YXIgZHJhd0xpbmUgPSBmdW5jdGlvbiAoY3R4LCB4MSwgeTEsIHgyLCB5Mikge1xuLy8gICBjdHguYmVnaW5QYXRoKCk7IC8vIFN0YXJ0IGEgbmV3IHBhdGhcbi8vICAgY3R4Lm1vdmVUbyh4MSwgeTEpOyAvLyBNb3ZlIHRoZSBwZW4gdG8gKDMwLCA1MClcbi8vICAgY3R4LmxpbmVUbyh4MiwgeTIpOyAvLyBEcmF3IGEgbGluZSB0byAoMTUwLCAxMDApXG4vLyAgIGN0eC5saW5lV2lkdGggPSAwLjE7XG4vLyAgIGN0eC5zdHJva2UoKTsgLy8gUmVuZGVyIHRoZSBwYXRoXG4vLyB9O1xuXG4vLyBjb25zb2xlLmxvZyhcIm5vaXNlOiBcIiwgbm9pc2UpO1xuY29uc3Qgc2VsZWN0VGlsZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiZS54OiBcIiwgZS5jbGllbnRYLCBcImUueTogXCIsIGUuY2xpZW50WSk7XG4gIGNvbnNvbGUubG9nKFwiZTogXCIsIGUpO1xuICAvLyBhLGIsYyxkIGFyZSBmb3VyIHBvaW50cyB3ZSdyZSBkcmF3aW5nIG9uIHRoZSBzY3JlZW5cbiAgLy8gdGhleSByZXByZXNlbnQgdGhlIGNvcm5lcnMgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0aWxlXG4gIGxldCBhID0gYm9hcmRTcGFjZVRvU2NyZWVuU3BhY2Uoe3g6IDAsIHk6IDB9LCB7eDogMCwgeTogMH0sIHt4OjEseToxfSk7XG4gIGxldCBiID0gYm9hcmRTcGFjZVRvU2NyZWVuU3BhY2Uoe3g6IDAsIHk6IDF9LCB7eDogMCwgeTogMH0sIHt4OjEseToxfSk7XG4gIGxldCBjID0gYm9hcmRTcGFjZVRvU2NyZWVuU3BhY2Uoe3g6IDEsIHk6IDF9LCB7eDogMCwgeTogMH0sIHt4OjEseToxfSk7XG4gIGxldCBkID0gYm9hcmRTcGFjZVRvU2NyZWVuU3BhY2Uoe3g6IDEsIHk6IDB9LCB7eDogMCwgeTogMH0sIHt4OjEseToxfSk7XG4gIC8vIGNvbnN0IGN0eCA9IGdldENvbnRleHQoKTtcbiAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG4gIC8vIGRyYXdMaW5lKGN0eCwgYSwgYiwgYywgZCk7XG4gIC8vIHJldHVybiB7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFl9XG59XG4vKiogKi9cbmNvbnN0IHNldHVwQ2FudmFzSGFuZGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RUaWxlKTtcblxufVxuLy8gY29uc3QgZ2V0Q29udGV4dCA9ICgpID0+IHtcbi8vICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuLy8gICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgcmV0dXJuIGN0eDtcbi8vIH1cbmNvbnN0IGdldENhbnZhcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICByZXR1cm4gY2FudmFzO1xufVxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICBjb25zdCBncmFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmFzcycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gIGNvbnN0IHdhdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGVyJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgY29uc3Qgc2FuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW5kJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgY29uc3Qgc25vdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbm93JykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgY29uc3QgdGlsZVR5cGU6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFt3YXRlciwgc2FuZCwgZ3Jhc3MsIHNub3csIHNub3ddXG5cbiAgY29uc3QgbWFrZUxldmVsRGF0YTJEID0gKHJvd01heDogbnVtYmVyLCBjb2xNYXg6IG51bWJlcikgPT4ge1xuICAgIGxldCBsZXZlbERhdGEyRDogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93TWF4OyBpKyspIHsgLy8gcm93c1xuICAgICAgbGV0IHJvd3M6IG51bWJlcltdID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbE1heDsgaisrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5vaXNlLnNpbXBsZXgyKGkgLyAxMDAsIGogLyAxMDApO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKSAqIDI1NjtcblxuICAgICAgICByb3dzLnB1c2gocGVybGluTWFwKHZhbHVlKSk7XG5cbiAgICAgIH1cbiAgICAgIGxldmVsRGF0YTJELnB1c2gocm93cyk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbERhdGEyRFxuXG4gIH1cblxuICBjb25zdCBsZXZlbERhdGEyRCA9IG1ha2VMZXZlbERhdGEyRChCT0FSREhFSUdIVCwgQk9BUkRXSURUSCk7XG4gIGxldCBjZW50ZXJYID0gcGxheWVyLng7XG4gIGxldCBjZW50ZXJZID0gcGxheWVyLnk7XG4gIGxldCB2aWV3cG9ydFdpZHRoID0gNTtcbiAgbGV0IHZpZXdwb3J0SGVpZ2h0ID0gNTtcbiAgbGV0IHN0YXJ0WCA9IGNsYW1wKDAsIGxldmVsRGF0YTJELmxlbmd0aCAtIDEsIGNlbnRlclggLSB2aWV3cG9ydFdpZHRoKTtcbiAgbGV0IGVuZFggPSBjbGFtcCgwLCBsZXZlbERhdGEyRC5sZW5ndGggLSAxLCBjZW50ZXJYICsgdmlld3BvcnRXaWR0aCk7XG4gIGxldCBzdGFydFkgPSBjbGFtcCgwLCBsZXZlbERhdGEyRFswXS5sZW5ndGggLSAxLCBjZW50ZXJZIC0gdmlld3BvcnRIZWlnaHQpO1xuICBsZXQgZW5kWSA9IGNsYW1wKDAsIGxldmVsRGF0YTJEWzBdLmxlbmd0aCAtIDEsIGNlbnRlclkgKyB2aWV3cG9ydEhlaWdodCk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIC8vIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICAvLyBjb25zdCBjdHggPSBnZXRDb250ZXh0KCk7XG4gIC8vIFRPRE8gLSBtYWtlIGl0IHN1Y2sgbGVzcyBieSBvbmx5IGRyYXdpbmcgYSByaG9tYnVzIGFyb3VuZCB0aGUgYXJlYSBkcmF3biBcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBsZXQgc2NyZWVuSSA9IDA7XG4gIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPD0gZW5kWDsgaSsrKSB7XG4gICAgbGV0IHNjcmVlbkogPSAwO1xuICAgIGZvciAobGV0IGogPSBzdGFydFk7IGogPD0gZW5kWTsgaisrKSB7XG4gICAgICBjb25zdCB0aWxlID0gbGV2ZWxEYXRhMkRbaV1bal07XG4gICAgICBjb25zdCBhc3NldCA9IHRpbGVUeXBlW3RpbGVdO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0aWxlOiBcIiwgdGlsZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImFzc2V0OiBcIiwgYXNzZXQpO1xuICAgICAgbGV0IHhPZmZzZXQgPSAoQk9BUkRXSURUSCAvIDQpICogNTA7XG4gICAgICBsZXQgeU9mZnNldCA9IDA7XG4gICAgICBsZXQgY2FydFggPSBzY3JlZW5JICogNTA7XG4gICAgICBsZXQgY2FydFkgPSBzY3JlZW5KICogNTA7XG4gICAgICBsZXQgaXNvWCA9IGNhcnRYIC0gY2FydFk7XG4gICAgICBsZXQgaXNvWSA9IChjYXJ0WCArIGNhcnRZKSAvIDI7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImFzc2V0OiBcIiwgYXNzZXQpO1xuICAgICAgY3R4LmRyYXdJbWFnZShhc3NldCwgaXNvWCArIHhPZmZzZXQsIGlzb1kgKyB5T2Zmc2V0KVxuICAgICAgc2NyZWVuSisrXG4gICAgfVxuICAgIHNjcmVlbkkrK1xuICB9XG59XG5cbmNvbnN0IGNsYW1wID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGlmICh2YWx1ZSA8IG1pbikgeyByZXR1cm4gbWluIH1cbiAgaWYgKHZhbHVlID4gbWF4KSB7IHJldHVybiBtYXggfVxuICByZXR1cm4gdmFsdWVcbn1cblxuXG5jb25zdCBnYW1lU3RhcnQgPSAoKSA9PiB7XG4gIC8vIGltcHJvdmUgbmFtZSBvZiB0aGlzIGZ1bmN0aW9uXG4gIHNldHVwQ2FudmFzSGFuZGxlcnMoKTtcbiAgY29uc3Qgc2VlZCA9IE1hdGgucmFuZG9tKCk7XG4gIG5vaXNlLnNlZWQoc2VlZCk7XG4gIHJlbmRlcigpO1xufVxuLy8gY29uc29sZS5sb2coXCJkb2N1bWVudC5yZWFkeVN0YXRlOiBcIiwgZG9jdW1lbnQucmVhZHlTdGF0ZSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpe1xuICBnYW1lU3RhcnQoKTtcbn0pO1xuXG5cbi8vIGNsYXNzIE5vZGUge1xuLy8gICAgIHZhbHVlOiBMb2NhdGlvbjtcbi8vICAgICBuZXh0OiBOb2RlIHwgbnVsbDtcblxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBMb2NhdGlvbikge1xuLy8gICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlLFxuLy8gICAgICAgdGhpcy5uZXh0ID0gbnVsbFxuLy8gICAgIH1cblxuLy8gICAgIGFwcGVuZE5vZGVUb1RhaWwobG9jYXRpb246IExvY2F0aW9uKSB7XG4vLyAgICAgICBjb25zdCBlbmQ6Tm9kZSA9IG5ldyBOb2RlKGxvY2F0aW9uKVxuLy8gICAgICAgbGV0IG46Tm9kZSA9IHRoaXM7XG4vLyAgICAgICB3aGlsZShuLm5leHQgIT09IG51bGwpe1xuLy8gICAgICAgICAgIG4gPSBuLm5leHQ7XG4vLyAgICAgICB9XG4vLyAgICAgICBuLm5leHQgPSBlbmQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGNsYXNzIExvY2F0aW9uIHtcbi8vICAgICAgIHg6IG51bWJlclxuLy8gICAgICAgeTogbnVtYmVyXG4vLyAgICAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6bnVtYmVyKXtcbi8vICAgICAgICAgICB0aGlzLnggPSB4LFxuLy8gICAgICAgICAgIHRoaXMueSA9IHk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyBsZXQgdGVzdDpMb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigwLDApO1xuXG4vLyBsZXQgaGVhZDpOb2RlID0gbmV3IE5vZGUodGVzdCk7XG5cbi8vIGhlYWQuYXBwZW5kTm9kZVRvVGFpbCh0ZXN0KTtcblxuXG5cblxuIl0sIm5hbWVzIjpbIkRpcmVjdGlvbiIsImJvYXJkU3BhY2VUb1NjcmVlblNwYWNlIiwiYm9hcmQiLCJzY3JvbGxQb3NpdGlvbiIsInNjYWxlIiwidGlsZVdpZHRoIiwieCIsInRpbGVIZWlnaHQiLCJ5IiwibWFwQ29vcmRzIiwiZGlyZWN0aW9uIiwiVXAiLCJEb3duIiwiTGVmdCIsIlJpZ2h0IiwiRXJyb3IiLCJwZXJsaW5NYXAiLCJ2YWx1ZSIsInBsYXllciIsIkJPQVJEV0lEVEgiLCJCT0FSREhFSUdIVCIsInVwZGF0ZVBvc2l0aW9uIiwicG9pbnQiLCJjbGFtcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb2RlIiwicmVuZGVyIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RUaWxlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRYIiwiY2xpZW50WSIsImEiLCJiIiwiYyIsImQiLCJncmFzcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3YXRlciIsInNhbmQiLCJzbm93IiwidGlsZVR5cGUiLCJsZXZlbERhdGEyRCIsInJvd01heCIsImNvbE1heCIsImkiLCJyb3dzIiwiaiIsIm5vaXNlIiwic2ltcGxleDIiLCJNYXRoIiwiYWJzIiwicHVzaCIsIm1ha2VMZXZlbERhdGEyRCIsImNlbnRlclgiLCJjZW50ZXJZIiwic3RhcnRYIiwibGVuZ3RoIiwiZW5kWCIsInN0YXJ0WSIsImVuZFkiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5JIiwic2NyZWVuSiIsImFzc2V0IiwiY2FydFgiLCJjYXJ0WSIsImlzb1giLCJpc29ZIiwiZHJhd0ltYWdlIiwibWluIiwibWF4Iiwic2VlZCIsInJhbmRvbSIsImdhbWVTdGFydCJdLCJzb3VyY2VSb290IjoiIn0=