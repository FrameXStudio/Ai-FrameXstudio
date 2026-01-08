import React from 'react';

export default function ServiceCard({ title, text }){
  return (
    <div className="bg-gradient-to-b from-[#071a28] to-[#071426] p-6 rounded-2xl border border-slate-700 shadow-lg transform hover:-translate-y-2 transition">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-tr from-primary to-accent text-black font-bold">AI</div>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{text}</p>
      <div className="mt-6">
        <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium">Request Demo</button>
      </div>
    </div>
  );
}
