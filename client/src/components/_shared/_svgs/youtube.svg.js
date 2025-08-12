export function YoutubeSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 15"
      width={props.width ?? 21}
      height={props.height ?? 15}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor ?? "#FFFFE3"}
        d="M20.593 2.703A2.506 2.506 0 0 0 18.831.937C17.265.507 11 .5 11 .5S4.736.493 3.169.904a2.56 2.56 0 0 0-1.766 1.778C.99 4.248.986 7.496.986 7.496s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831ZM8.996 10.505l.005-6 5.207 3.005-5.212 2.995Z"
      />
    </svg>
  );
}
