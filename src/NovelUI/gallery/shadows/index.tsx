import { ReactNode } from "react";
import "./shadows.css";

export const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={`flex min-h-[200px] flex-wrap gap-5 p-8 ${className}`}>
      {children}
    </div>
  );
};

export const CSSShadows = () => {
  return (
    <>
      <Wrapper className="container--fafafa">
        <div className="sm-shadow size-20 rounded-lg bg-white" />
        <div className="md-shadow size-20 rounded-lg bg-white" />
        <div className="lg-shadow size-20 rounded-lg bg-white" />
      </Wrapper>
      <Wrapper className="container--light-yellow">
        <div className="sm-shadow size-20 rounded-lg bg-white" />
        <div className="md-shadow size-20 rounded-lg bg-white" />
        <div className="lg-shadow size-20 rounded-lg bg-white" />
      </Wrapper>
      <Wrapper className="container--salt-air">
        <div className="sm-shadow size-20 rounded-lg bg-white" />
        <div className="md-shadow size-20 rounded-lg bg-white" />
        <div className="lg-shadow size-20 rounded-lg bg-white" />
      </Wrapper>
      <Wrapper className="container--black">
        <div className="sm-shadow size-20 rounded-lg bg-white" />
        <div className="md-shadow size-20 rounded-lg bg-white" />
        <div className="lg-shadow size-20 rounded-lg bg-white" />
      </Wrapper>
    </>
  );
};

export const ColorShadows = () => {
  return (
    <Wrapper className="bg-[#fafafa]">
      <div className="size-20 rounded-lg bg-white shadow-sm shadow-blue-600/30" />
      <div className="size-20 rounded-lg bg-white shadow-md shadow-blue-300/30" />
      <div className="size-20 rounded-lg bg-white shadow-lg shadow-blue-400/30" />
      <div className="size-20 rounded-lg bg-white shadow-xl shadow-blue-300/40" />
      <div className="size-20 rounded-lg bg-white shadow-2xl shadow-blue-400/80" />
    </Wrapper>
  );
};

export default function Shadows() {
  return (
    <Wrapper className="bg-[#fafafa]">
      <div className="size-20 rounded-lg bg-white shadow-sm" />
      <div className="size-20 rounded-lg bg-white shadow-md" />
      <div className="size-20 rounded-lg bg-white shadow-lg" />
      <div className="size-20 rounded-lg bg-white shadow-xl" />
      <div className="size-20 rounded-lg bg-white shadow-2xl" />
    </Wrapper>
  );
}
