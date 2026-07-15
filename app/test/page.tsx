import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, CheckCircle2, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestPage() {
  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center p-6 bg-gradient-to-tr from-background via-muted/30 to-muted/80">
      <div className="max-w-2xl w-full space-y-6">
        {/* Decorative glow elements */}
        <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

        <div className="flex items-center gap-3 justify-center mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 animate-pulse">
            <Shield className="w-5 h-5" />
          </div>
          <Badge variant="secondary" className="px-3 py-1 font-medium tracking-wide uppercase text-[10px] border border-primary/20 bg-primary/5 text-primary">
            Protected Route
          </Badge>
        </div>

        <Card className="border border-border bg-background/60 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-primary/5">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />
          
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/75 bg-clip-text text-transparent">
              Access Granted Successfully!
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base max-w-md mx-auto mt-2">
              If you can see this page, it means the middleware redirect logic is working perfectly and you are authenticated.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 items-start">
                <div className="p-2 rounded-md bg-green-500/10 text-green-500 border border-green-500/20 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Auth Verification</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Route matches security filter rules. Middleware verified the session token.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 items-start">
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Strict Protection</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    This URL (<code className="bg-muted px-1 py-0.5 rounded text-[10px]">/test</code>) is not marked public in <code className="bg-muted px-1 py-0.5 rounded text-[10px]">proxy.ts</code>.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border/60 rounded-xl p-5 bg-card/40 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b pb-3 border-border/60">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">Session status</span>
                </div>
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 text-[10px] px-2 py-0">
                  Active
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-lg bg-muted/20 border border-border/30">
                  <p className="text-muted-foreground text-[10px] uppercase font-semibold">User Role</p>
                  <p className="font-medium mt-1">Authorized</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/20 border border-border/30">
                  <p className="text-muted-foreground text-[10px] uppercase font-semibold">Route Name</p>
                  <p className="font-medium mt-1">/test</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/20 border border-border/30">
                  <p className="text-muted-foreground text-[10px] uppercase font-semibold">Privacy</p>
                  <p className="font-medium mt-1 text-rose-500">Private</p>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between items-center bg-muted/20 px-8 py-5 border-t border-border/60">
            <span className="text-xs text-muted-foreground">
              Verify redirect behavior by logging out.
            </span>
            <Button asChild size="sm" variant="outline" className="gap-2 transition-transform duration-200 hover:translate-x-1 cursor-pointer">
              <Link href="/">
                Go to Home <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
