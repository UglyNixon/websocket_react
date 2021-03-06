import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../style/canvas.scss'
import Brush from '../tools/Brush';
const Canvas = observer(() => {
   
    const canvasRef= useRef()
    console.log(canvasRef)
    useEffect(()=>{
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current))
    },[])
    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={600} height={400}></canvas>
        </div>
    );
})

export default Canvas;