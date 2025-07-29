import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Smile, Paperclip, ThumbsUp, Heart, Flame } from "lucide-react";

const fakeMessages = [
  {
    id: 1,
    author: "Jean",
    avatar: "https://i.pravatar.cc/40?u=jean",
    content: "Bonjour à tous !",
    timestamp: "10:00",
    reactions: { like: 1, heart: 0, fire: 0 },
    attachment: null,
  },
  {
    id: 2,
    author: "Moi",
    avatar: "https://i.pravatar.cc/40?u=moi",
    content: "Salut Jean !",
    timestamp: "10:01",
    reactions: { like: 0, heart: 1, fire: 0 },
    attachment: null,
  },
];

export default function DiscussionChat() {
  const [messages, setMessages] = useState(fakeMessages);
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim() && !file) return;

    const msg = {
      id: messages.length + 1,
      author: "Moi",
      avatar: "https://i.pravatar.cc/40?u=moi",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString().slice(0, 5),
      reactions: { like: 0, heart: 0, fire: 0 },
      attachment: file ? URL.createObjectURL(file) : null,
    };

    setMessages([...messages, msg]);
    setNewMessage("");
    setFile(null);
  };

  const handleReaction = (id, type) => {
    setMessages((msgs) =>
      msgs.map((msg) =>
        msg.id === id
          ? {
              ...msg,
              reactions: { ...msg.reactions, [type]: msg.reactions[type] + 1 },
            }
          : msg
      )
    );
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-orange-700 text-white py-28 px-6  mb-6 overflow-hidden -mt-14"
        >
          <h1 className="text-3xl font-bold text-center">
            💬 Forum de Discussion
          </h1>
          <p className="text-center mt-2 text-sm">
            Partagez, posez vos questions, et échangez librement avec les
            membres de la communauté.
          </p>

          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2016/03/26/13/09/chat-1280x720.jpg')",
            }}
          ></div>
        </motion.div>

        <section className="px-4 py-8 max-w-3xl mx-auto h-[80vh] flex flex-col shadow-lg rounded-lg bg-white my-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-4 text-center"
          >
            💬 Discussion
          </motion.h2>

          <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 max-w-[80%] ${
                  msg.author === "Moi" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <img
                  src={msg.avatar}
                  alt={msg.author}
                  className="w-10 h-10 rounded-full"
                />

                {/* Message bubble */}
                <div
                  className={`rounded-2xl px-4 py-3 text-sm shadow ${
                    msg.author === "Moi"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="font-semibold">{msg.author}</p>
                  <p className="mt-1">{msg.content}</p>
                  {msg.attachment && (
                    <a
                      href={msg.attachment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mt-2 inline-block"
                    >
                      📎 Voir la pièce jointe
                    </a>
                  )}
                  <div className="text-xs text-right mt-1">{msg.timestamp}</div>

                  {/* Réactions */}
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => handleReaction(msg.id, "like")}
                      className="text-sm hover:text-blue-500"
                    >
                      <ThumbsUp size={16} className="inline" />{" "}
                      {msg.reactions.like}
                    </button>
                    <button
                      onClick={() => handleReaction(msg.id, "heart")}
                      className="text-sm hover:text-pink-500"
                    >
                      <Heart size={16} className="inline" />{" "}
                      {msg.reactions.heart}
                    </button>
                    <button
                      onClick={() => handleReaction(msg.id, "fire")}
                      className="text-sm hover:text-red-500"
                    >
                      <Flame size={16} className="inline" />{" "}
                      {msg.reactions.fire}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              placeholder="Votre message..."
              className="flex-1 px-4 py-2 border rounded-lg w-full"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <label className="cursor-pointer flex items-center gap-1 text-sm text-gray-600 hover:text-orange-600">
              <Paperclip size={18} />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              {file && <span>{file.name}</span>}
            </label>
            <button
              onClick={handleSend}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            >
              Envoyer
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
