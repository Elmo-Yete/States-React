interface Props {
  text: string;
  handleClick: () => void;
}

export default function Button(props: Props) {
  return <button onClick={props.handleClick}>{props.text}</button>;
}
