import { For } from "solid-js";

interface WatchlistItem {
  id: string;
  token: string;
  icon: string;
  price: string;
  change: string;
  changeColor: string;
}

export default function Watchlist() {
  const items: WatchlistItem[] = [
    {
      id: "1",
      token: "USDC",
      icon: "US",
      price: "$1.00",
      change: "+0.01%",
      changeColor: "text-green-400"
    },
    {
      id: "2",
      token: "SOL",
      icon: "SO",
      price: "$95.42",
      change: "+2.45%",
      changeColor: "text-green-400"
    },
    {
      id: "3",
      token: "BONK",
      icon: "BO",
      price: "$0.00024",
      change: "-1.23%",
      changeColor: "text-red-400"
    }
  ];

  return (
    <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
      <div class="flex items-center gap-2 mb-4">
        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        <h3 class="text-white text-lg font-semibold">Watchlist</h3>
      </div>
      <div class="space-y-3">
        <For each={items}>
          {(item) => (
            <div class="bg-slate-800/40 rounded-lg p-4 flex items-center justify-between hover:bg-slate-800/60 transition-colors">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.icon}
                </div>
                <div>
                  <div class="text-white font-medium">{item.token}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-white font-semibold">{item.price}</div>
                <div class={`text-sm ${item.changeColor}`}>{item.change}</div>
              </div>
              <button class="ml-4 text-slate-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
