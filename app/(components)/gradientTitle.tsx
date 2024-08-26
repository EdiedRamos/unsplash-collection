interface Props {
  children: React.ReactNode;
}

export const GradientTitle = ({ children }: Props) => {
  return (
    <h2 className="text-center text-cs-300 bg-gradient-bg mt-9 bg-clip-text text-transparent">
      {children}
    </h2>
  );
};
