export function FacebookSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 21"
      width={props.width ?? 20}
      height={props.height ?? 21}
      fill="none"
      className={props.className ?? ""}
    >
      <path
        fill={props.fillColor ?? "#FFFFE3"}
        d="M20 10.804C20 5.247 15.523.743 10 .743S0 5.247 0 10.803c0 5.022 3.657 9.185 8.438 9.94v-7.03h-2.54v-2.91h2.54V8.588c0-2.521 1.492-3.914 3.777-3.914 1.094 0 2.238.196 2.238.196v2.476h-1.26c-1.243 0-1.63.776-1.63 1.572v1.887h2.773l-.443 2.908h-2.33v7.03c4.78-.754 8.437-4.916 8.437-9.938Z"
      />
    </svg>
  );
}
