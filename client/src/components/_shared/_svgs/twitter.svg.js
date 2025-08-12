export function TwitterSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 17"
      width={props.width ?? 18}
      height={props.height ?? 17}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor ?? "#FFFFE3"}
        d="M14.176.743h2.76l-6.03 6.777L18 16.743h-5.554l-4.35-5.594-4.979 5.594H.355l6.45-7.25L0 .743h5.695l3.933 5.112L14.176.743Zm-.969 14.375h1.53L4.864 2.282h-1.64l9.983 12.836Z"
      />
    </svg>
  );
}
