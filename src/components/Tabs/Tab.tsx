interface ITabProps {
  title: string;
  children: React.ReactNode;
}

const Tab = ({ children }: ITabProps) => {
  return <div>{children}</div>;
};

export default Tab;
