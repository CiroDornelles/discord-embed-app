import React from 'react';
import { CardContent, CardHeader, Stack } from '@mui/material';
import { VampireCard } from '../../ui/VampireCard';
import { PathCard } from './PathCard';
import { WillpowerCard } from './WillpowerCard';
import { BloodPoolCard } from './BloodPoolCard';

export const ResourcesCard = ({
  path = { current: 0, max: 10 },
  bloodPool = { current: 0, max: 20 },
  willpower = { permanent: 0, temporary: Array(10).fill(false) },
  onPathChange,
  onBloodPoolChange,
  onWillpowerChange,
  disabled = false
}) => {
  return (
    <VampireCard>
      <CardHeader title="Resources" />
      <CardContent>
        <Stack spacing={3}>
          <PathCard
            path={path}
            onPathChange={onPathChange}
            disabled={disabled}
          />
          <WillpowerCard
            willpower={willpower}
            onWillpowerChange={onWillpowerChange}
            disabled={disabled}
          />
          <BloodPoolCard
            bloodPool={bloodPool}
            onBloodPoolChange={onBloodPoolChange}
            disabled={disabled}
          />
        </Stack>
      </CardContent>
    </VampireCard>
  );
};
