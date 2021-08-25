import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../style/toolbar.scss'
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';

const Toolbar = () => {
    const changeColor=e=>{
        toolState.setFillColor(e.target.value)
    }
    return (
        <div className='toolbar'>
            <button className='toolbar__btn brush' onClick={()=>toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className='toolbar__btn rect' onClick={()=>toolState.setTool(new Rect(canvasState.canvas))}></button>
            <button className='toolbar__btn circle'></button>
            <button className='toolbar__btn eraser'></button>
            <button className='toolbar__btn line'></button>
            <input onChange={(e)=>changeColor(e)} type='color' className='palette'/>
            <button className='toolbar__btn undo'></button>
            <button className='toolbar__btn redo'></button>
            <button className='toolbar__btn save'></button>
        </div>
    );
};

export default Toolbar;