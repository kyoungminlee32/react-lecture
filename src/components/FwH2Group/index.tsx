interface FwH2GroupProps {
  lines: string[];
}

export const FwH2Group = ({ lines }: FwH2GroupProps) => {
  return (
    <div className="h2-group">
      <h2 className="h2">
        {lines.map((line, index) => (
          <span key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default FwH2Group;
