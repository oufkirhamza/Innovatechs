const Star = ({className}) => {
  return (
    <svg
      width="90"
      height="100"
      viewBox="0 0 111 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rotate-45 ${className}`}
    >
      <path
        d="M110.5 55C80.5804 56.0739 56.5738 80.0804 55.4999 110C54.4261 80.0804 30.4195 56.0739 0.499937 55C30.4195 53.9261 54.4261 29.9196 55.4999 -2.40413e-06C56.5738 29.9196 80.5804 53.9261 110.5 55Z"
        fill="url(#paint0_linear_1_27)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_27"
          x1="110.5"
          y1="55"
          x2="0.499937"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5C45FD" />
          <stop offset="1" stop-color="#D5D4D9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Star;