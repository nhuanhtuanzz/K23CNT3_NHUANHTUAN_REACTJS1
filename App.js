import './App.css';
import NatCompB from './components/NatCompB';

function App() {
  // Dữ liệu cá nhân
  const userInfo = {
    natName: "Nhu Anh Tuan",
    natId: "2310900111",
    natBirth: "21/10/2005",
    natPhone: "0123456789",
    natClass: "K23CNT3"
  };

  return (
    <div className="App">
      <h1>Thông Tin Cá Nhân</h1>
      {/* Truyền dữ liệu vào component */}
      <NatCompB 
        natName={userInfo.natName}
        natId={userInfo.natId}
        natBirth={userInfo.natBirth}
        natPhone={userInfo.natPhone}
        natClass={userInfo.natClass}
      />
    </div>
  );
}

export default App;