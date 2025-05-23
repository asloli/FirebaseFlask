# Firebase-Flask Integration Demo / Firebase + Flask 練習專案

This project demonstrates basic integration between a Flask backend and Firebase for front-end data interaction.  
本專案為大學時期練習 Firebase 與 Flask 結合的範例，模擬登入驗證與資料互動流程。

## 🔧 Features / 功能特色

- 🔥 Firebase-based login flow simulation  
  使用 Firebase 模擬使用者登入驗證
- 🧠 Python backend with Flask  
  後端使用 Flask 建構 REST API 與邏輯處理
- 🛒 Sample product processing module (`goodsMenu/`)  
  模擬商品資料與價格演算法處理
- 🧍 Named logic modules (e.g., `industriousWoman.py`)  
  副模組命名彩蛋（內含自定邏輯或分工程式）
- 🖼 Template rendering using Jinja2  
  使用 Flask 的模板系統動態產出 HTML

## 🗂 Folder Overview / 資料夾說明

- `SB.py` - Main app entry  
- `industriousWoman.py` - Secondary logic module  
- `goodsMenu/` - Product / logic mock data  
- `static/` - Static frontend assets  
- `templates/` - Page rendering templates  

## 🚀 How to Run / 執行方式

1. 安裝 Flask
   ```
   pip install flask
   ```
2. 執行主程式
   ```
   python SB.py
   ```
3. 在瀏覽器開啟 [http://localhost:5000](http://localhost:5000)

## 📘 License / 授權

MIT
