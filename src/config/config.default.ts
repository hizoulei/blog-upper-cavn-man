import * as dotenv from 'dotenv';
const path = require("path");

// 获取 --mode 参数
const modeIndex = process.argv.indexOf("--mode");
const mode = modeIndex !== -1 ? process.argv[modeIndex + 1] : "development";

// 尝试按顺序加载环境文件：.env.mode.local, .env.mode, .env.local, .env
const envFiles = [`.env.${mode}.local`, `.env.${mode}`, ".env.local", ".env"];
/**
 * 如果同一个变量在多个文件中定义，会使用优先级最高的文件中的值
 * 每个文件都可以定义独特的变量，它们会被合并到最终的环境变量中
 */
envFiles.forEach((file) => {
  // 获取环境变量文件路径(根据当前工作目录)
  const envPath = path.resolve(process.cwd(), file);
  dotenv.config({
    debug: true,
    path: envPath,
  });
});

export default process.env
