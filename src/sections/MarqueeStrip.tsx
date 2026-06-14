const marqueeItems = [
  'FOR RESEARCH PURPOSES ONLY',
  '99% TESTED PURITY',
  'HPLC VERIFIED',
  'DISCREET PACKAGING',
  'THIRD-PARTY TESTED',
  'NOT FOR HUMAN CONSUMPTION',
  'COA BEFORE CHECKOUT',
  'TRACKED DISPATCH',
  'RESEARCH USE ONLY',
];

export default function MarqueeStrip() {
  const allItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative z-20 bg-navy-900/50 border-y border-white/5 overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center mx-4">
            <span className="text-gold-500/80 text-[11px] font-mono tracking-[0.2em] uppercase">
              {item}
            </span>
            <span className="mx-6 w-1 h-1 bg-gold-500/40 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
