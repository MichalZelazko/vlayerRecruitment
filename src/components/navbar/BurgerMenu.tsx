interface IBurgerMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export default function BurgerMenu({
  open,
  setOpen,
  className,
}: IBurgerMenuProps) {
  return (
    <div className={`z-10 items-center ${className}`}>
      <button
        aria-label="Toggle the menu"
        className="w-8 h-8 flex flex-col justify-around items-center"
        onClick={() => setOpen(open ? false : true)}
      >
        <span
          className={`block absolute h-[2px] w-5 bg-base-1000 transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "translate-y-1"
          }`}
        ></span>
        <span
          className={`block absolute h-[2px] w-5 bg-base-1000 transform transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "-translate-y-1"
          }`}
        ></span>
      </button>
    </div>
  );
}
