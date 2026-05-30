#!/bin/bash

echo "==================================="
echo "  磐霆速科企业官网启动脚本"
echo "==================================="
echo ""

cd "$(dirname "$0")"

# 使用系统 Node.js，避开 Codex 内置 Node 的 SWC 签名问题
FNM_NODE="/Users/mac-d/.local/share/fnm/node-versions/v24.14.1/installation/bin"
export PATH="$FNM_NODE:$PATH"

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
