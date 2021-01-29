// 创建一个model存储所有数据

const model = new Map()

export const createModel = (namespace: any, model: any) => {
  return model.set(namespace, model)
}

export const getModel = (namespace: any) => {
  return model.get(namespace)
} 

export const getNamespace = () => {
  return Array.from(model.keys())
}