interface ITabTitleProps {
  title: string;
  isActive: Boolean;
  onClick: () => void;
}

const TabTitle = ({ title, isActive, onClick }: ITabTitleProps) => {
  return (
    <button
      className={`mr-2 ${isActive ? "bg-blue-500 text-white" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TabTitle;
