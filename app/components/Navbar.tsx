import Link from "next/link";

export default function Navbar() {
  return (

<div className="static inset-x-0 top-0 z-20 bg-background">
  <div className="container">
    <nav aria-label="Main" data-orientation="horizontal" dir="ltr"
      className="relative z-10 flex max-w-max flex-1 items-center justify-center min-w-full">
      <div className="flex w-full items-center justify-between gap-12 py-4">
        <div>
        <Link href="/">
            <img 
                src="/Logo.png" 
                alt="Dakka booking platform logo, home page link" 
                className="h-8 w-auto" 
            />
        </Link>
        </div>
        <div style={{ position: 'relative' }}>
          <ul data-orientation="horizontal"
            className="group flex-1 list-none items-center justify-center space-x-1 hidden lg:flex" dir="ltr">
            <li>
              <button id="radix-:R0:-trigger-radix-:Rkb:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:Rkb:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Platform 
             
              </button>
            </li>
            <li>
              <button id="radix-:R0:-trigger-radix-:R14b:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:R14b:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Use cases 
             
              </button>
            </li>
            <li>
              <button id="radix-:R0:-trigger-radix-:R1kb:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:R1kb:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Developers 
               
              </button>
            </li>
            <li>
              <button id="radix-:R0:-trigger-radix-:R24b:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:R24b:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Resources 
               
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Log in</button><button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Start now
          </button>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            aria-label="Main Menu">
           
          </button>
        </div>
      </div>
      <div className="absolute left-0 top-full flex justify-center"></div>
    </nav>
  </div>
</div>
  );
}