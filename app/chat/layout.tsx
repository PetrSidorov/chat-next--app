"use server";
import "@/scss/chat.scss";
const Chat = async ({ children }: { children: React.ReactNode }) => {
  // const apiUrl = new URL(`/api/`);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Chat;
