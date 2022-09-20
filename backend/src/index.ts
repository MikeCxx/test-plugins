import { Logger } from '@ones-op/node-logger'
import { PluginRequest, PluginResponse } from '@ones-op/node-types'

// 安装插件
export async function Install() {
  Logger.info('[Plugin] Install')
}

// 启用插件
export async function Enable() {
  Logger.info('[Plugin] Enable')
}

// 停用插件
export function Disable() {
  Logger.info('[Plugin] Disable')
}

// 卸载插件
export function UnInstall() {
  Logger.info('[Plugin] UnInstall')
}

// 升级插件
export function Upgrade(oldPluginInfo) {
  const oldVersion = oldPluginInfo.version
  Logger.info('[Plugin] Upgrade', 'old version:', oldVersion)
}

// 示例方法
export async function hello(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  Logger.info('[Plugin] hello ======= 请求成功');
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}