import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './Itemtype';
import './index.css';

const Box = ({ name, control, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={connectDragSource}
      style={Object.assign({}, { className: 'heightWidth' }, { opacity })}
    >
      {control}
    </div>
  );
};
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(Box);
