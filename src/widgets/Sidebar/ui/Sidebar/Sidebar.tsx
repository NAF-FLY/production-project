import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import cls from "./Sidebar.module.scss";
export enum ThemeButton {
  CLEAR = "clear",
}

interface ISidebarProps {
  className?: string;
  theme?: ThemeButton;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
