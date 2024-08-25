interface Props {
  children: React.ReactNode;
}

export const GradientTitle = ({ children }: Props) => {
  return (
    <h2 className="text-center text-cs-300 bg-gradient-image mt-9">
      {children}
    </h2>
  );
};
