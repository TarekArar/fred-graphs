import { useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
  children: React.ReactElement[];
};

const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className="flex">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            isActive={selectedTab === index}
            onClick={() => {
              setSelectedTab(index);
            }}
          />
        ))}
      </div>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
