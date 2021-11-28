import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <ul>
      {colors.map((color) => (
        <Item
          key={color}
          color={color}
          isSelected={selected === color}
          onClick={() => setSelected(color)}
        />
      ))}
    </ul>
  );
}

function Item({ color, isSelected, onClick }) {
  return (
    <li className="item" onClick={onClick} style={{ backgroundColor: color }}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  );
}

const colors = ['#ff0055', '#0099ff', '#22cc88', '#ffaa00'];

const spring = {
  type: 'tween',
  duration: 0.5,
};
