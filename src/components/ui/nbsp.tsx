interface NbspProps {
  num?: number;
}
const Nbsp = ({ num = 1 }: NbspProps) => (
  <>
    {Array.from({ length: num }, (_, index) => (
      <span key={index}>&nbsp;</span>
    ))}
  </>
);

export default Nbsp;