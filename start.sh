#!/bin/bash

echo "==================================="
echo "  磐霆速科企业官网启动脚本"
echo "==================================="
echo ""

cd "$(dirname "$0")"

# 检查 node_modules 是否存在
if [ ! -d "node_modules" ]; then
    echo "正在安装依赖..."
    npm install
    echo ""
fi

echo "启动开发服务器..."
echo "访问地址: http://localhost:3000"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

npm run dev
