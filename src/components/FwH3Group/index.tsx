interface FwH3GroupProps {
  title: string;
}

export const FwH3Group = ({ title }: FwH3GroupProps) => {
  return (
    <div className="h3-group">
      <h2 className="h3">{title}</h2>
    </div>
  );
};

export default FwH3Group;
