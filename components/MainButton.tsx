interface MainButtonProps {
  text: string;
  onClick?: () => void;
  isSecondary?: boolean;
}

const MainButton = ({ text, onClick, isSecondary }: MainButtonProps) => {
  return (
    <button
      className={`font-bold py-2 px-4 rounded-md ${isSecondary 
        ? "bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--color-foreground)] hover:text-[var(--color-background)] hover:bg-[var(--color-foreground)] hover:border-[var(--color-background)]"
        :"bg-[var(--color-foreground)] text-[var(--color-background)] border border-[var(--color-background)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background)] hover:border-[var(--color-foreground)]"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
