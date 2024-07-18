import { FC } from "react";
import "./Loader.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
