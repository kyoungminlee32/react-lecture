import { CSSProperties } from 'react';

interface FwProgressProps {
  current: number;
  max: number;
}

export const FwProgress = ({ current, max }: FwProgressProps) => {
  const safeCurrent = Math.min(Math.max(current, 1), Math.max(max, 1));
  const safeMax = Math.max(max, 1);

  const progressStyle = {
    '--current': safeCurrent,
    '--max': safeMax,
  } as CSSProperties;

  return (
    <div className="progress-top" style={progressStyle} aria-label={`진행 ${safeCurrent}/${safeMax}`}>
      <div className="progress">
        <div className="bar">
          <div className="gauge" />
        </div>
      </div>
    </div>
  );
};

export default FwProgress;
