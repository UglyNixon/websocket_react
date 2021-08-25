import React from 'react';
import toolState from '../store/toolState';

const Settingbar = () => {
const changeColor=(e)=>{
    toolState.setStrokeColor(e.target.value)
}
    return (
       
        <div className='setting-bar' >
            <label htmlFor='line-width'>толщина линии</label>
            <input
            onChange={e=>{toolState.setLineWidth(e.target.value);console.log(e.target.value)}}
            style={{margin:'0px 10px'}}defaultValue={1} id='line-width' type='number' min={1} max={500}/>
            <label htmlFor='line-color'>Цвет обводки</label>
            <input id='line-color' type='color' onChange={(e)=>changeColor(e)}></input>
        </div>
    );
};

export default Settingbar;