export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 p-10">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-primary">
        PaperlessHQ Theme Demo
      </h1>

      {/* Cards Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Light Mode Card */}
        <div className="rounded-2xl border bg-card text-card-foreground shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary">Light Mode</h2>
          <p className="text-muted-foreground mt-2">
            Clean and professional with white, blue, and gray accents.
          </p>

          <button className="mt-6 px-5 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition">
            Sign Document
          </button>
        </div>

        {/* Dark Mode Card */}
        <div className="rounded-2xl border bg-card text-card-foreground shadow-lg p-6 dark">
          <h2 className="text-2xl font-semibold text-primary">Dark Mode</h2>
          <p className="text-muted-foreground mt-2">
            Sleek, modern dark gray background with blue highlights.
          </p>

          <button className="mt-6 px-5 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition">
            Sign Document
          </button>
        </div>
      </div>

      {/* Sidebar / Navigation Example */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Light Sidebar */}
        <aside className="bg-sidebar text-sidebar-foreground rounded-xl border p-6">
          <h3 className="text-lg font-semibold text-sidebar-primary">Light Sidebar</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-sidebar-accent">Dashboard</li>
            <li className="hover:text-sidebar-accent">Contracts</li>
            <li className="hover:text-sidebar-accent">Settings</li>
          </ul>
        </aside>

        {/* Dark Sidebar */}
        <aside className="bg-sidebar text-sidebar-foreground rounded-xl border p-6 dark">
          <h3 className="text-lg font-semibold text-sidebar-primary">Dark Sidebar</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-sidebar-accent">Dashboard</li>
            <li className="hover:text-sidebar-accent">Contracts</li>
            <li className="hover:text-sidebar-accent">Settings</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
