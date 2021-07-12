import React from "react";

const MidArea = ({class1,dragstart,dragover,ondrop}) => {
  return (
    <div className="flex-1 h-screen w-screen overflow-auto border-r">
      <div draggable style={{height:"80vh",width:"100%",margin:"50px auto"}} onDragStart={dragstart} onDragOver={dragover} 
      onDrop={ondrop} className={class1} id="droppedarea">
      </div>
    </div>
  )
}

export default MidArea
