import AdminNav from "../components/admin/admin-nav";

export const metadata = {
  title: "SmartStore Admin",
  description: "SmartStore Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
