import { OUR_CLIENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CLIENT_BORDER_CLASS: string[] = [
  "border-t-0 border-x-0 md:border-r",
  "border-t-0 border-r-0 md:border-r md:border-l-0",
  "border-t-0 border-x-0 lg:border-r",
  "border-t-0 border-r-0 md:border-l-0 md:border-r lg:border-r-0",
  "border-t-0 border-x-0 md:border-r lg:border-b-0",
  "border-t-0 border-t-0 border-r-0 md:border-l-0 lg:border-r lg:border-b-0",
  "border-y-0 border-y-0 border-x-0 md:border-r",
  "border-y-0 border-y-0 border-r-0 md:border-l-0 md:border-r lg:border-r-0",
];

export function Clients() {
  return (
    <section className="relative overflow-hidden py-24" id="clients">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-dark-200/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-[-20%] top-10 mx-auto h-64 max-w-2xl rounded-full bg-primary/2 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-10%] bottom-0 mx-auto h-72 max-w-3xl rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center font-medium text-foreground/75 text-lg">
          Proudly serving leading companies across various industries
        </h3>

        <div className="mx-auto mt-16 w-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {OUR_CLIENTS.map((company, index) => (
              <div
                className={cn(
                  "group flex h-20 w-44 items-center justify-center border border-foreground/25 md:h-24 md:w-60",
                  CLIENT_BORDER_CLASS[index] ?? "border border-foreground/25"
                )}
                key={company.name}
              >
                <img
                  alt={company.name}
                  className={cn(
                    "h-auto max-h-14 w-auto max-w-30 object-contain opacity-80 grayscale transition hover:opacity-100 group-hover:grayscale-0 max-sm:scale-75"
                  )}
                  draggable={false}
                  height={32}
                  src={company.logo}
                  width={120}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
