import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Package, Search } from "lucide-react";

export function TrackingWidget() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl rounded-lg border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/50 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative grow">
          <Search className="-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-white/50" />
          <input
            className="h-14 w-full rounded-md border border-white/10 bg-black/40 pr-4 pl-12 font-mono text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter your tracking ID..."
            type="text"
          />
        </div>
        <button
          className="group flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 font-bold text-white uppercase tracking-wider transition-all hover:bg-primary/90"
          type="button"
        >
          Track Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <div className="mt-4 flex gap-6 px-2 pb-2">
        <div className="flex items-center gap-2 font-medium text-white/60 text-xs uppercase tracking-wider">
          <Package className="h-4 w-4 text-primary" /> Reliable Delivery
        </div>
        <div className="flex items-center gap-2 font-medium text-white/60 text-xs uppercase tracking-wider">
          <Clock className="h-4 w-4 text-primary" /> Fast Response
        </div>
        <div className="flex items-center gap-2 font-medium text-white/60 text-xs uppercase tracking-wider">
          <MapPin className="h-4 w-4 text-primary" /> Nationwide Coverage
        </div>
      </div>
    </motion.div>
  );
}
