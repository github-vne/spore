import React from 'react';
import { Avatar } from 'ui-kit';
import { Card, FullName, Status } from './style';

export default ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Avatar />
      <FullName>Nikolay Vasenkin</FullName>
      <Status>My name is Skrillex</Status>
    </Card>
  );
};
