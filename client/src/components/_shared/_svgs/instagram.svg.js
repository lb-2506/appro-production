export function InstagramSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 19"
      width={props.width ?? 18}
      height={props.height ?? 19}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor ?? "#FFFFE3"}
        fillRule="evenodd"
        d="M13 .743H5a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5Zm3.25 13a3.26 3.26 0 0 1-3.25 3.25H5a3.26 3.26 0 0 1-3.25-3.25v-8A3.26 3.26 0 0 1 5 2.493h8a3.26 3.26 0 0 1 3.25 3.25v8Zm-2.5-7.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 5.243a4.5 4.5 0 1 0 4.5 4.5 4.49 4.49 0 0 0-4.5-4.5Zm-2.75 4.5a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
