
interface TwoLineTextProps {
  text: string;
}

export const TwoLineText = ({ text }: TwoLineTextProps) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default TwoLineText;
