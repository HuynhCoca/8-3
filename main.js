const validNumbers = [1, 4, 5, 6, 12, 19, 23, 25, 26, 27, 28, 30, 31, 37, 38, 39, 40, 41, 44];

function showImage() {
  const number = parseInt(document.getElementById("numberInput").value);
  if (validNumbers.includes(number)) {
    const newWindow = window.open("", "_self");
    newWindow.document.open();
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang='en'>
      <head>
        <title>Mừng ngày 8/3</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
          body {
            text-align: center;
            padding: 30px;
            background-color: #ffd1dc;
            font-family: 'Pacifico', ;
            animation: backgroundAnimation 5s infinite alternate;
          }
          @keyframes backgroundAnimation {
            from { background-color: #ffd1dc; }
            to { background-color: #ffb6c1; }
          }
          img {
            max-width: 90%;
            height: auto;
            border: 3px solid #ff69b4;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          h1 {
            color: #ff69b4;
            text-shadow: 2px 2px #ff1493;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            text-decoration: none;
            color: white;
            background-color: #ff69b4;
            border-radius: 5px;
            transition: transform 0.3s ease-in-out;
          }
          a:hover {
            background-color: #ff1493;
            transform: scale(1.1);
          }
        </style>
      </head>
      <body>
        <h1>CHÚC CÁC BẠN LUÔN XINH ĐẸP NHAAAAA!!!!</h1>
        <img src='images/image${number}.jpg' alt='Image ${number}'>
        <br>
      </body>
      </html>
    `);
  } else {
    alert("BẠN CÓ CHẮC ĐÂY LÀ SỐ CỦA MÌNH KHÔNG???");
  }
}