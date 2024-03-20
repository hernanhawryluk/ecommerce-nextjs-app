const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex items-center justify-center py-16"
      style={{ minHeight: "calc(100vh - 430px)" }}
    >
      <div className="max-w-[650px] w-full flex flex-col gap-5 items-center shadow-xl shadow-slate-400 bg-slate-50 rounded-md p-4 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
