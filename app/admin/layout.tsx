import DashboardSideNav from "@/app/ui/admin/DashboardSideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <DashboardSideNav />
      </div>
      <div className="w-[calc(100%-var(--sidenav-width))] ml-[var(--sidenav-width)] p-12">
        {children}
      </div>
    </div>
  );
}
