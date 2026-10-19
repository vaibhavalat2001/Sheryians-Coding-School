import React, { useEffect, useState } from "react";
import { api } from "./config/axiosInstance";
import NotesCard from "../components/NotesCard";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [notesData, setNotesData] = useState([]);
  const [update, setUpdate] = useState();
  const [showForm, setShowForm] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // CREATE NOTES

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (update) {
        await api.put(`/${update._id}`, formData);

        setNotesData((prev) =>
          prev.map((note) =>
            note._id === update._id ? { ...note, ...formData } : note,
          ),
        );

        setUpdate(null);
      } else {
        await api.post("/create", formData);
        await getNotes();
      }

      setFormData({ title: "", description: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Save note error:", error.response?.data || error.message);
    }
  };

  // READ ALL NOTES
  const getNotes = async () => {
    try {
      const res = await api.get("/allNotes");
      setNotesData(res.data.allNotes);
    } catch (error) {
      console.log("get api error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  // UPDATE NOTES
  const updateNotes = async (notes) => {
    try {
      setFormData(notes);
      setUpdate(notes);
      setShowForm(true);
    } catch (error) {
      console.log("update api error:", error);
    }
  };

  // DELETE NOTES

  const deleteNotes = async (id) => {
    try {
      await api.delete(`/${id}`);

      setNotesData((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      console.error(
        "Delete note error:",
        error.response?.data || error.message,
      );
    }
  };

  // DELETE ALL NOTES
  const deleteAllNotes = async () => {
    if (!window.confirm("Are you sure you want to delete all notes?")) {
      return;
    }

    try {
      await api.delete("/allDelete");
      setNotesData([]);
    } catch (error) {
      console.error(
        "Delete all notes error:",
        error.response?.data || error.message,
      );
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setUpdate(null);
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-black text-white px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Notes
          </h1>

          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            Create, update and manage your notes easily.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          {/* Create Notes Button */}
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 active:scale-95 max-sm:px-4"
          >
            + Create Notes
          </button>

          {/* Delete All Notes */}
          <button
            type="button"
            onClick={deleteAllNotes}
            className="rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-3 font-semibold text-red-400 transition hover:bg-red-500/20 hover:text-red-300 active:scale-95 max-sm:px-4"
          >
            Delete All Notes
          </button>
        </div>

        {/* Create / Update Modal */}
        {showForm && (
          <div
            onClick={closeForm}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          >
            {/* Form Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl sm:p-6"
            >
              {/* Form Header */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {update ? "Update Note" : "Create a New Note"}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    {update
                      ? "Make changes to your existing note."
                      : "Write down your thoughts and ideas."}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-lg bg-zinc-800 px-3 py-1 text-zinc-400 transition hover:bg-zinc-700 hover:text-white active:scale-95"
                >
                  ✕
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Title
                  </label>

                  <input
                    required
                    onChange={handleChange}
                    name="title"
                    value={formData.title}
                    type="text"
                    placeholder="Enter note title..."
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Description
                  </label>

                  <textarea
                    required
                    minLength={20}
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    placeholder="Write your note here..."
                    rows="5"
                    className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 active:scale-[0.98]"
                >
                  {update ? "Update Note" : "Create Note"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Notes Section */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Notes</h2>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
              {notesData?.length || 0} Notes
            </span>
          </div>

          {/* Notes Grid */}
          {loading ? (
            <p>Loading notes...</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {notesData?.map((val) => (
                <NotesCard
                  key={val._id}
                  notes={val}
                  deleteNotes={deleteNotes}
                  updateNotes={updateNotes}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
