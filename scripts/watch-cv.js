const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const fileToWatch = 'cv.tex';
const outputDir = 'public';

console.log(`\x1b[36m[Overleaf Local]\x1b[0m Bắt đầu theo dõi file \x1b[33m${fileToWatch}\x1b[0m...`);
console.log(`\x1b[36m[Overleaf Local]\x1b[0m File PDF sẽ được tự động xuất ra thư mục \x1b[32m${outputDir}/\x1b[0m`);

let isCompiling = false;

function compileLatex() {
  if (isCompiling) return;
  isCompiling = true;
  
  console.log(`\x1b[36m[Overleaf Local]\x1b[0m Đang biên dịch...`);
  
  // pdflatex command with output directory set to public
  const command = `pdflatex -interaction=nonstopmode -output-directory=${outputDir} ${fileToWatch}`;
  
  exec(command, (error, stdout, stderr) => {
    isCompiling = false;
    if (error) {
      console.error(`\x1b[31m[Overleaf Local] Lỗi biên dịch:\x1b[0m ${error.message}`);
      // Lọc các dòng lỗi LaTeX để hiển thị gọn gàng hơn
      const lines = stdout.split('\n');
      const errorLines = lines.filter(line => line.startsWith('!') || line.startsWith('l.'));
      if (errorLines.length > 0) {
         console.error(`\x1b[31mChi tiết lỗi LaTeX:\x1b[0m\n${errorLines.join('\n')}`);
      }
      return;
    }
    
    console.log(`\x1b[32m[Overleaf Local]\x1b[0m Biên dịch thành công! File \x1b[32mpublic/cv.pdf\x1b[0m đã được cập nhật lúc ${new Date().toLocaleTimeString()}`);
    
    // Dọn dẹp các file phụ sinh ra trong quá trình compile để tránh rác thư mục public
    const baseName = path.basename(fileToWatch, '.tex');
    const extsToRemove = ['.aux', '.log', '.out'];
    extsToRemove.forEach(ext => {
      const junkFile = path.join(outputDir, `${baseName}${ext}`);
      if (fs.existsSync(junkFile)) {
        fs.unlinkSync(junkFile);
      }
    });
  });
}

// Chạy lần đầu tiên khi vừa khởi động
compileLatex();

// Dùng debounce để tránh việc lưu liên tục (Ctrl+S nhiều lần) kích hoạt compile nhiều lần
let timeout;
fs.watch(fileToWatch, (eventType, filename) => {
  if (filename) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`\n\x1b[33m[File Changed]\x1b[0m Đã phát hiện thay đổi trên file \x1b[33m${filename}\x1b[0m`);
      compileLatex();
    }, 500);
  }
});
