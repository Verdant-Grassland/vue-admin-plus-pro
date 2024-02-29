interface StatusType {
  statusCode: number;
  statusMessage: string;
}

const AdminReview: { [key: string]: StatusType } = {
  NOT_AUDITED: { statusCode: 0, statusMessage: "未审核" },
  PENDING_AUDIT: { statusCode: 1, statusMessage: "待审核" },
  APPROVED: { statusCode: 2, statusMessage: "审核通过" },
  FAILED: { statusCode: 3, statusMessage: "审核失败" },
  CANCELED: { statusCode: 4, statusMessage: "审核取消" }
}

const AccountStatus: { [key: string]: StatusType } = {
  NORMAL: { statusCode: 0, statusMessage: "正常" },
  FROZEN: { statusCode: 1, statusMessage: "冻结" },
  BLACKLISTED: { statusCode: 2, statusMessage: "黑名单" },
  DISABLED: { statusCode: 3, statusMessage: "禁用" },
  BANNED: { statusCode: 4, statusMessage: "封号" }
}

export { AdminReview, AccountStatus}