type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="tag px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
