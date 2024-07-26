import Content from "./components/Content"
import Header from "./components/Header"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"

export default function App() {
  return (
    <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Content />
          <Rightbar />
        </div>
      </div>
  
    )
  
}
