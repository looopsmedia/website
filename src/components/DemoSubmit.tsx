import React, { useEffect, useRef, useState } from "react";
import { Send, X, UploadCloud } from "lucide-react";

// ---- CONFIG ----
const FORM_ENDPOINT = "https://getform.io/f/bjjrmdjb";
const MAX_SIZE_MB = 25;

export const DemoSubmit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");          // ✅ Email state
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [errorText, setErrorText] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);

  // ESC ile kapat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey, { passive: true });
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    if (f && f.size > MAX_SIZE_MB * 1024 * 1024) {
      setFileError(`Please choose a file under ${MAX_SIZE_MB}MB.`);
      e.target.value = "";
      setFile(null);
      return;
    }
    setFileError(null);
    setFile(f);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);
    setErrorText(null);

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);        // ✅ Email gönderiliyor
      formData.append("message", message);
      if (file) formData.append("file", file);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) {
        const msg =
          data?.error ||
          data?.message ||
          (typeof data === "string" ? data : "") ||
          `Request failed (${res.status})`;
        setStatus("err");
        setErrorText(msg);
        return;
      }

      setStatus("ok");
      setFullName("");
      setEmail("");       // ✅ reset email
      setMessage("");
      setFile(null);
    } catch (err: any) {
      setStatus("err");
      setErrorText(err?.message || "Something went wrong.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        className="
          fixed z-40
          inset-x-0 bottom-0
          md:inset-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto
        "
      >
        <div className="w-full md:w-auto px-0 md:px-0 pb-[env(safe-area-inset-bottom)] md:pb-0">
          <button
            onClick={() => setIsOpen(true)}
            className="
              w-full md:w-auto
              flex items-center justify-center gap-2
              px-5 py-4 md:py-3
              bg-gradient-to-r from-teal to-pink
              text-white font-semibold
              rounded-none md:rounded-2xl
              shadow-[0_-10px_24px_rgba(0,0,0,0.35)] md:shadow-lg
              border-t border-white/10 md:border-0
              hover:brightness-110 active:scale-95
              transition-all
            "
            aria-label="Submit Demo"
          >
            <Send className="w-5 h-5" />
            <span>Submit Demo</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={dialogRef}
            className="
              relative bg-dark-gray border border-light-gray/20 rounded-2xl shadow-2xl 
              w-[92%] max-w-xl p-6 md:p-8 
              transform transition-all duration-300 scale-100
            "
            role="dialog"
            aria-modal="true"
            aria-label="Submit your demo"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-light-gray/60 hover:text-light-gray transition-colors rounded-full hover:bg-light-gray/10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-pink rounded-full mx-auto mb-3 flex items-center justify-center">
                <UploadCloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-light-gray">Submit Your Demo</h3>
              <p className="text-teal font-medium">We listen to everything.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4" encType="multipart/form-data">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-light-gray/70 mb-1" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl bg-black/30 border border-light-gray/20 
                             px-4 py-3 text-light-gray placeholder:text-light-gray/40
                             focus:outline-none focus:border-teal"
                  placeholder="Your name and surname"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-light-gray/70 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-black/30 border border-light-gray/20 
                             px-4 py-3 text-light-gray placeholder:text-light-gray/40
                             focus:outline-none focus:border-teal"
                  placeholder="your@email.com"
                />
              </div>

              {/* Audio File */}
              <div>
                <label className="block text-sm text-light-gray/70 mb-1" htmlFor="file">
                  Audio File (MP3/WAV)
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept="audio/*"
                  onChange={onFileChange}
                  className="w-full rounded-xl bg-black/30 border border-light-gray/20 
                             file:mr-4 file:py-2 file:px-4 file:rounded-lg 
                             file:border-0 file:bg-teal file:text-black 
                             text-light-gray
                             focus:outline-none focus:border-teal
                             cursor-pointer"
                />
                {fileError ? (
                  <p className="text-xs text-red-400 mt-1">{fileError}</p>
                ) : (
                  <p className="text-xs text-light-gray/50 mt-1">
                    Upload speed and service limits may affect large files.
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-light-gray/70 mb-1" htmlFor="message">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-black/30 border border-light-gray/20 
                             px-4 py-3 text-light-gray placeholder:text-light-gray/40
                             focus:outline-none focus:border-teal resize-y"
                  placeholder="Tell us about the track, credits, links, etc."
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending || !!fileError}
                  className="w-full flex items-center justify-center gap-2
                             px-5 py-3 rounded-xl
                             bg-gradient-to-r from-teal to-pink text-white font-semibold
                             hover:brightness-110 active:scale-[0.98]
                             disabled:opacity-60 disabled:cursor-not-allowed
                             transition-all"
                >
                  <Send className="w-5 h-5" />
                  {isSending ? "Sending..." : "Send Demo"}
                </button>

                {/* Status */}
                {status === "ok" && (
                  <p className="text-green-400 text-sm mt-3 text-center">
                    Thanks! Your demo was sent successfully.
                  </p>
                )}
                {status === "err" && (
                  <p className="text-red-400 text-sm mt-3 text-center">
                    {errorText || "Something went wrong. Please try again."}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoSubmit;
