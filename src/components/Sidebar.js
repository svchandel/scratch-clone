import React from "react";
import Icon from "./Icon";
import MidArea from "./MidArea";



export default function Sidebar() {

  const onDragStart = (event,id) =>{
    event.dataTransfer.setData('text', id);
  };
  const onDragOver = (ev)=>{
    ev.preventDefault();
  }
  const onDrop = (ev,id1)=>{
    var id = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(id))
    var targetarea = document.getElementById(id1)
    targetarea.style.width = "fit-content"
  }

  var note = 0
  function onClickMotion(e){
    window.value = e.target.getAttribute('name')  
    // console.log(window.value)  
  }
  window.addEventListener('keydown', (event) => {
    window.value = event.code
    // console.log(window.value)
  });
  function onKey(e){
    // console.log(e.target.getAttribute('name'))
  }
  function onKeyA(e){
    window.step = e.target.value
    window.value = e.target.getAttribute('name')
  }
  return (
    <div className="overflow-hidden flex flex-row">
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">

      <div className="font-bold"> {"Motion"} </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable1" className="border flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "move10" onClick= {onClickMotion}>
          {"Move 10 steps"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable2" className="border flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "rotate15left" onClick= {onClickMotion}>
          {"Turn "}
          <Icon name="undo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable3" className="border flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "rotate15right" onClick= {onClickMotion}>
          {"Turn "}
          <Icon name="redo" size={15} className="text-white mx-2" />
          {"15 degrees"}
      </div>

      <div className="font-bold"> {"Looks"} </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable4" className="border flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "hello" onClick= {onClickMotion}>
          {"Say Hello "}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable5" className="border flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "2hello" onClick= {onClickMotion}>
        {"Say Hello for 3 Sec"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable6" className="border flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "think" onClick= {onClickMotion}>
          {"Think"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable7" className="border flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "2think" onClick= {onClickMotion}>
        {"Think for 3 Sec"}
      </div>

      <div className="font-bold"> {"Events"} </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable8" className="border flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name ="move"  onChange= {onKeyA}>
          {"Press A to move"}
          <input
            type="number"
            style={{
              marginRight: '4px',
              marginLeft: '4px',
              width: '50px',
              color: '#000',
            }}
            name = "move"
            max="70"
            placeholder="0-70"
          /> 
           {"steps"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable9" className="border flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name ="rotate90" value= "" onClick= {onKey}>
          {"Press S to rotate 90 deg"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable10" className="border flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name ="helloSpace" value= "" onClick= {onKey}>
          {"Press Space to say Hello"}
        </div>
        <div draggable onDragStart={(ev)=>onDragStart(ev,ev.target.id)} id="draggable11" className="border flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name ="UpThink" value= "" onClick= {onKey}>
          {"Press UP arrow to Think for 5 sec"}
        </div>

        <div className="font-bold"> {"Control"}
          <div className="border flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "move10" onClick= {onClickMotion}>
            {"Wait for 2 sec"}
          </div>
          <div className="border flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" name = "move10" onClick= {onClickMotion}>
            {"Wait until"}
            <input
              type="number"
              style={{
                marginRight: '4px',
                marginLeft: '4px',
                width: '50px',
                color: '#000',
              }}
              name = "move"
              max="70"
              placeholder="0-70"
            /> 
            {"sec"}
          </div>
        </div>
    </div>

    <MidArea 
      dragover={(event)=>onDragOver(event)} 
      ondrop={(event)=>onDrop(event,event.target.id)} 
      class1={"droppable"}
      dragstart={(event)=>onDragStart(event)}
    />
    </div>
  );
}
