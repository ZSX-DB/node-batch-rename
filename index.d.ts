type TransferConfig = {
    isTransfer: true,
    originPath: string,
    targetPath: string
    namingRule?: string | Function
}

type NotTransferConfig = {
    isTransfer: false,
    originPath: string,
    namingRule?: string | Function
}

type BatchRename = (config: TransferConfig | NotTransferConfig) => void

declare const batchRename: BatchRename

export default batchRename
