const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full flex items-center justify-center pb-12 pt-12">
      <div className="max-w-[650px] w-full flex flex-col gap-5 items-center shadow-xl shadow-slate-400 bg-slate-50 rounded-md p-4 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
