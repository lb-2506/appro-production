export function CrossSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={props.width ?? 16}
      height={props.height ?? 16}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor ?? "#002317"}
        d="m14.836 14.364-.472.472a.667.667 0 0 1-.943 0l-5.42-5.421-5.422 5.42a.667.667 0 0 1-.943 0l-.471-.47a.667.667 0 0 1 0-.944l5.421-5.42-5.421-5.422a.667.667 0 0 1 0-.943l.471-.471c.26-.26.683-.26.943 0L8 6.586l5.421-5.421c.26-.26.683-.26.943 0l.472.471c.26.26.26.683 0 .943L9.415 8l5.42 5.421c.261.26.261.683 0 .943Z"
      />
    </svg>
  );
}
