import { useChatStore } from '../store/useChatStore';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';
import NoChatSelected from '../components/NoChatSelected';
import { useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const HomePage = () => {
  const { selectedUser } = useChatStore();
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    console.log('User updated', authUser);
  }, [authUser]);

  useEffect(() => {
    // Jeżeli authUser jest null, wymuś sprawdzenie autoryzacji
    if (!authUser) {
      checkAuth();
    }
  }, [authUser, checkAuth]);

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
