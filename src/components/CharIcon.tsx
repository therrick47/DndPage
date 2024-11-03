interface IconProps {
  source: string;
}
export const CharIcon = (props: IconProps): JSX.Element => {
  return (
    <img
      src={props.source}
      width='30px'
      height='30px'
    />
  );
};
