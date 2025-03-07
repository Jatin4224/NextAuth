const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-t from-gray-300 to-gray-800 drop-shadow-md">
      {children}
    </div>
  );
};

export default Authlayout;
