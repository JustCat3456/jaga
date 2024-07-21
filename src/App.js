import React, { useState } from 'react';
import './App.css';
import JagaInput from './components/JagaInput';
import Button from '@mui/material/Button'; // MUIのButtonをインポート

function App() {
  const [price, setPrice] = useState('');
  const [index, setIndex] = useState(0);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const calculateIndex = () => {
    // ここに指数の計算ロジックを追加します
    // 例えば、じゃがりこの値段を100で割るなど
    const jagarikoIndex = price / 100;
    setIndex(jagarikoIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>じゃがりこ指数Calculator</h1>
      </header>

      <div className="App-body">
        <p>じゃがりこ指数を計算するアプリです。</p>
        <p>じゃがりこの値段を入力してください。</p>
        <JagaInput value={price} onChange={handlePriceChange} />
        <Button variant="contained" color="primary" onClick={calculateIndex}>
          計算
        </Button>
        <p>じゃがりこ指数: <span id="jagariko-index">{index}</span></p>
      </div>      
    </div>
  );
}

export default App;
