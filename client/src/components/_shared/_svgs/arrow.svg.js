export function ArrowSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width={props.width ?? 15}
      height={props.height ?? 15}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor?? "#fff"}
        d="M15 1a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h8v8a1 1 0 1 0 2 0V1ZM1 14l.707.707 13-13L14 1l-.707-.707-13 13L1 14Z"
      />
    </svg>
  );
}
