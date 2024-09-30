import React from 'react';

type Props = {
  color: string;
};

const FlatCircle = ({ color = 'red' }: Props) => {
  return <div className={`bg-${color} rounded-full`}></div>;
};

export default FlatCircle;
