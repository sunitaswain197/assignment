import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './Itemtype';

const style = {
  height: '20rem',
  width: '22rem',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem'
};
const FormLayout = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  return (
    <div
      ref={connectDropTarget}
      style={Object.assign({}, style, { backgroundColor })}
    >
      {isActive ? 'Release to drop' : 'Drag a control here'}
    </div>
  );
};
export default DropTarget(
  ItemTypes.BOX,
  {
    drop: props => ({ content: props.control })
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(FormLayout);
