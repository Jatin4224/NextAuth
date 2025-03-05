const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-700">
      {children}
    </div>
  );
};

export default Authlayout;
