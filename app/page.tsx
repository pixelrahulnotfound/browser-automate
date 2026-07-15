import { UserButton, OrganizationSwitcher } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex flex-col">
      {/* Navigation header aligning user controls to the right */}
      <header className="w-full flex justify-between items-center px-8 py-4 border-b border-border/40 bg-background/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-xs tracking-tight text-muted-foreground uppercase">Automation Workspace</span>
        </div>

        {/* Stacked user controls */}
        <div className="flex flex-col items-end gap-2.5">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-medium">User Profile</span>
            <UserButton />
          </div>
          <div className="flex items-center gap-3 border-t border-border/30 pt-2.5 w-full justify-end">
            <span className="text-xs text-muted-foreground font-medium">Workspace</span>
            <OrganizationSwitcher 
              hidePersonal={true} 
              afterCreateOrganizationUrl="/?org=:slug"
              afterSelectOrganizationUrl="/?org=:slug"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-md text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary border border-primary/20 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Browser Automation
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Welcome to your automated browser agent workspace. Manage sessions, tasks, and scripts from your dashboard.
          </p>
        </div>
      </main>
    </div>
  )
}

