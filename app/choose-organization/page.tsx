import { OrganizationList } from "@clerk/nextjs"
import { Shield } from "lucide-react"

export default function ChooseOrganizationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-tr from-background via-muted/30 to-muted/80 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-xl w-full space-y-6 text-center">
        <div className="flex flex-col items-center space-y-3 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Choose Your Workspace
          </h1>
          <p className="text-muted-foreground text-sm max-w-sm">
            Select an existing organization or create a new one to access your browser automation workspace.
          </p>
        </div>

        <div className="border border-border/60 bg-background/60 backdrop-blur-xl rounded-2xl p-6 shadow-2xl flex justify-center">
          <OrganizationList
            afterCreateOrganizationUrl="/?org=:slug"
            afterSelectOrganizationUrl="/?org=:slug"
            hidePersonal={true}
          />
        </div>
      </div>
    </div>
  )
}
