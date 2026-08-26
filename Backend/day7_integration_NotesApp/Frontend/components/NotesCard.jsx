import React from "react";
import { Pencil, Trash2, FileText } from "lucide-react";

const NotesCard = ({ notes, updateNotes, deleteNotes }) => {
  return (
    <div className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-lg shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40">
      
      {/* Top */}
      <div>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <FileText size={20} />
          </div>

          <span className="text-xs text-zinc-600">
            Note
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-2 line-clamp-1 text-lg font-semibold text-white">
          {notes.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-zinc-400">
          {notes.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => updateNotes(notes)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-3 py-2.5 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500/20 active:scale-95"
        >
          <Pencil size={16} />
          Update
        </button>

        <button
          onClick={() => deleteNotes(notes._id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/20 active:scale-95"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;