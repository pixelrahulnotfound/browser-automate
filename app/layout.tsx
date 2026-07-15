import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ClerkProvider appearance={{ theme: shadcn }}>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <header className="flex justify-between items-center p-4 border-b border-border bg-background">
                <span className="font-semibold text-lg">NextAuth Demo</span>
                <div className="flex gap-4 items-center">
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <button className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted cursor-pointer transition-colors">Sign In</button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 cursor-pointer transition-colors">Sign Up</button>
                    </SignUpButton>
                  </Show>
                  <Show when="signed-in">
                    <UserButton />
                  </Show>
                </div>
              </header>
              <main className="flex-1">
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
