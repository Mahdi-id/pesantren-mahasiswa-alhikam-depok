import React, { useState, useEffect, useRef } from "react";
import santri from "../assets/santribot.png";
import santri2 from "../assets/santribot2.png";
import useLocalStorage from "../hooks/useLocalStorage";
import ReactMarkdown from "react-markdown";
const API_URL = import.meta.env.VITE_API_URL;

const QUICK_REPLIES = [
  "Berapa biaya SPP per bulan?",
  "Kapan pendaftaran santri baru dibuka?",
  "Siapa saja yang dapat mendaftar?",
  "Kapan waktu kegiatan belajar santri?",
  "Apakah santri diperbolehkan sambil bekerja?",
  "Apakah boleh mendaftar di pertengahan semester?",
  "Bagaimana alur pendaftaran santri?",
  "Apa saja fasilitas Pesantren?",
  "Bagaimana sistem pendidikan di Pesantren?",
  "Apakah pesantren menerima untuk Putra dan Putri?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useLocalStorage("chat_history", [
    {
      role: "bot",
      text: "Saya Hikam, Ada yang bisa saya bantu terkait Al-Hikam?",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) return;
    const t1 = setTimeout(() => setShowTooltip(true), 3000);
    const t2 = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 8000);
    }, 45000);
    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, [isOpen]);

  const handleSend = async (quickText) => {
    const textToSend = (quickText ?? input).trim();
    if (!textToSend) return;

    const userMessage = { role: "user", text: textToSend };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    const currentInput = textToSend;
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          history: updatedMessages,
        }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Maaf, koneksi ke server Hikam terputus.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleTrashClick = () => {
    if (messages.length <= 1) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    setShowConfirm(true);
  };

  const confirmClearChat = () => {
    setMessages([
      {
        role: "bot",
        text: "Saya Hikam, Ada yang bisa saya bantu terkait Al-Hikam?",
      },
    ]);
    setShowConfirm(false);
  };

  return (
    <>
      {(isOpen || showConfirm) && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] transition-opacity animate-in fade-in"
          onClick={() => {
            setIsOpen(false);
            setShowConfirm(false);
          }}
        />
      )}

      {showAlert && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[10001] animate-in slide-in-from-top duration-300">
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-3 rounded-md flex items-center gap-3 font-bricolage">
            <svg
              className="w-5 h-5 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold text-sm md:text-xl">
              Tidak ada percakapan terbaru untuk dihapus.
            </span>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4 animate-in zoom-in duration-300">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-bricolage text-gray-800 mb-2">
              Hapus Riwayat?
            </h3>
            <p className="text-gray-600 mb-6 font-bricolage text-md">
              Semua percakapan kamu dengan Hikam akan dihapus permanen.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl"
              >
                Batal
              </button>
              <button
                onClick={confirmClearChat}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-[9999] font-bricolage">
        {showTooltip && !isOpen && (
          <div className="absolute bottom-28 right-0 bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-2xl border border-gray-100 w-80 animate-bounce transition-all">
            <p className="font-bold text-[#597E52]">
              Punya pertanyaan seputar Pesantren Al-Hikam?
            </p>
            <p className="text-sm">Kami dengan senang hati membantu.</p>
            <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setShowTooltip(false);
            }}
            className={`transition-all duration-500 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white ${isOpen ? "w-12 h-12 bg-red-500 rounded-full" : "w-24 h-24 bg-[#597E52] rounded-2xl animate-float hover:scale-105"}`}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <img
                src={santri}
                alt="Bot"
                className="w-full h-full object-cover"
              />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute bottom-16 right-0 w-[350px] md:w-[400px] h-[550px] bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="p-5 bg-[#597E52] text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-green-200">
                  <img
                    src={santri2}
                    alt="mini-bot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hikam</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-90">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleTrashClick}
                className="p-2 hover:bg-white/20 rounded-full"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-grow p-5 overflow-y-auto space-y-4 bg-[#F9FBFA] flex flex-col">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 text-[15px] shadow-sm leading-relaxed break-words ${
                      msg.role === "user"
                        ? "bg-[#597E52] text-white rounded-xl rounded-tr-none"
                        : "bg-[#F0F4EF] border border-[#DCE4D9] text-gray-800 rounded-xl rounded-tl-none"
                    }`}
                  >
                    <div className="markdown-container">
                      <ReactMarkdown
                        components={{
                          ol: ({ node, ...props }) => (
                            <ol
                              {...props}
                              className="list-decimal ml-5 space-y-1 my-1"
                            />
                          ),

                          a: ({ node, ...props }) => (
                            <span className="text-gray-400 font-normal underline decoration-dotted">
                              {props.children}
                            </span>
                          ),

                          ul: ({ node, ...props }) => (
                            <ul
                              {...props}
                              className="list-disc ml-5 space-y-1 my-1"
                            />
                          ),

                          strong: ({ node, ...props }) => (
                            <strong
                              {...props}
                              className="font-bold text-[#3A4D39]"
                            />
                          ),
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {messages.length <= 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(question)}
                      className="text-xs md:text-sm text-left bg-white border border-[#DCE4D9] text-[#3A4D39] px-3 py-2 rounded-full hover:bg-[#F0F4EF] transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Silahkan tanya sesuatu.."
                className="flex-grow text-sm bg-gray-50 border border-gray-200 rounded-md px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#597E52]"
              />
              <button
                onClick={() => handleSend()}
                className="bg-[#597E52] text-white w-12 h-12 rounded-md flex items-center justify-center shadow-lg active:scale-95 transition-all"
              >
                <svg
                  className="h-5 w-5 rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .markdown-container ol {
    list-style-type: decimal; /* Biar muncul angka 1, 2, 3 */
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  
  .markdown-container li {
    margin-bottom: 0.5rem;
    padding-left: 0.25rem;
  }

  .markdown-container p {
    margin-bottom: 0.75rem;
  }
      `}</style>
    </>
  );
};

export default Chatbot;
